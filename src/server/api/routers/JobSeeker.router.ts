import { sendThankyouMail } from '@/emails/sender';
import { ServerConfig } from './../../config';
import { ServerErrorHandler } from './../../error-handler/ServerErrorHandler';
import { TRPCError } from '@trpc/server';
import { CreateJobSeekerSchema, DeleteJobSeekerSchema, GetJobSeekerSchema, UpdateJobSeekerSchema, ListJobSeekerSchema } from '@/schema/JobSeeker.schema';
import { publicProcedure, protectedProcedure } from './../trpc';
import { createTRPCRouter } from "../trpc";
import { createPaginator } from 'prisma-pagination';
import { type JobSeeker, type Prisma } from '@prisma/client';
import { z } from 'zod';

const paginate = createPaginator({perPage: ServerConfig.pageLimit})

export const JobSeekerRouter = createTRPCRouter({
    create: publicProcedure.input(CreateJobSeekerSchema).mutation(async ({ctx, input}) => {
        const {jobId, ...rest} = input;
        try {
            const alreadyCreated = await ctx.prisma.jobSeeker.findFirst({
                where: {email: input.email}
            });

            if(!alreadyCreated) {
                const res = await ctx.prisma.jobSeeker.create({
                    data: {
                        ...rest
                    }
                });
                const app =  await ctx.prisma.applications.create({
                    data: {
                        jobId, 
                        jobSeekerId: res.id
                    },
                    include: {
                        job: true
                    }
                })
                void sendThankyouMail({
                    name: res.name,
                    email: res.email,
                    jobTitle: app.job.title
                });
                return res;
            }
            // CHECK IF USER ALREADY APPILIED FOR THIS JOB
            const alreadyApplied = await ctx.prisma.applications.findFirst({
                where: {
                    jobId,
                    jobSeekerId: alreadyCreated.id
                }
            })
            if(alreadyApplied){
                throw new TRPCError({message: 'already applied', code: 'BAD_REQUEST'})
            }

            const res = await ctx.prisma.applications.create({
                data: {
                    jobId,
                    jobSeekerId: alreadyCreated.id
                },
                include: {
                    job: true
                }
            })
            void sendThankyouMail({
                name: alreadyCreated.name,
                email: alreadyCreated.email,
                jobTitle: res.job.title
            });
            return alreadyCreated;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    update: protectedProcedure.input(UpdateJobSeekerSchema).mutation(async ({ctx, input}) => {
        const {id, ...rest} = input;

        try {
            const res = await ctx.prisma.jobSeeker.update({
                where: {id},
                data: {...rest}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error);
        }
    }),

    delete: protectedProcedure.input(DeleteJobSeekerSchema).mutation(async ({ctx, input}) => {
        const {id} = input;

        try {
            const res = await ctx.prisma.jobSeeker.delete({
                where: {id}
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    single: protectedProcedure.input(GetJobSeekerSchema).query(async ({ctx, input}) => {
        const {id} = input;
        try {
            const res = await ctx.prisma.jobSeeker.findFirst({
                where: {id},
                include: {
                    applications:{
                        include: {
                            job: true,
                            jobSeeker: true
                        }
                    }
                }
            });
            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    list: protectedProcedure.input(ListJobSeekerSchema).query(async ({ctx, input}) => {
        try {
            const res = await paginate<JobSeeker, Prisma.JobSeekerFindManyArgs>(ctx.prisma.jobSeeker, {
            }, input.paginate);

            return res;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    isApplied: protectedProcedure.input(z.object({email: z.string(), jobId: z.string()})).query(async ({ctx, input}) => {
        const {email, jobId} = input;
        try {
            const res = await ctx.prisma.applications.findFirst({
                where: {
                    jobSeeker: {
                        email
                    },
                    jobId
                }
            });

            return res ? true : false;
        } catch (error) {
            ServerErrorHandler(error)
        }
    }),

    count: protectedProcedure.query(async ({ctx, input}) => {
        try {
            const res = await ctx.prisma.applications.count();
            return {
                count: res
            }
        } catch (error) {
            ServerErrorHandler(error)
        }
    })
})