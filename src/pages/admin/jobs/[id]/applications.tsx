 
import superjson from 'superjson';
import dayjs from 'dayjs';
import React from 'react'
import relativeTime from 'dayjs/plugin/relativeTime';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { appRouter } from '@/server/api/root';
import { createInnerTRPCContext } from '@/server/api/trpc';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/utils/api';
import Link from 'next/link';
import { EditOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { skeletonCount } from '~/components/job/AdminJobCardGrid';
import ApplicationGrid from '~/components/applicant/ApplicationGrid';
import AdminPageHeader from '~/components/dashboard/AdminPageHeader';
dayjs.extend(relativeTime);



export async function getServerSideProps(
    context: GetServerSidePropsContext<{ id: string }>,
) {
    const ssg = createProxySSGHelpers({
        router: appRouter,
        ctx: createInnerTRPCContext({ session: await getServerAuthSession({ req: context.req, res: context.res }) }),
        transformer: superjson,
    });

    const id = context.params?.id as string;
    // console.log("IDDDDDDDDDDDDD", id)
    if(!id) return {
        notFound: true
      }
    /*
     * Prefetching the `post.byId` query here.
     * `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead.
     */
    await ssg.jobs.single.prefetch({ id });

    return {
        props: {
            trpcState: ssg.dehydrate(),
            id
        },
    };
}




const ApplicationsPage = ({ id }: InferGetServerSidePropsType<typeof getServerSideProps>,) => {
    // const { data: job } = api.jobs.single.useQuery({ id });
    return (
        <>
            <AdminPageHeader title='All Submissions' />
            <div className='mt-10'>
            <ApplicationGrid jobId={id} /> 
            </div>
        </>
    )
}

export default ApplicationsPage