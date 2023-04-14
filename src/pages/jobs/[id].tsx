import { type JobListItem } from '@/schema/Job.schema'
import superjson from 'superjson';
import dayjs from 'dayjs';
import React from 'react'
import JobPageHeader from '~/components/job/JobPageHeader';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Card } from 'antd';
import StickyBox from 'react-sticky-box';
import JobPageSidebar from '~/components/job/JobPageSidebar';
import ApplyModal from '~/components/applicant/ApplyModal';
import { isAlreadyApplied } from '@/helpers/handleSubmissionLocally';
import { getJobSeeker } from '@/helpers/handleJobseekerLocally';
import { type GetServerSidePropsContext, type InferGetServerSidePropsType } from 'next';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { appRouter } from '@/server/api/root';
import { createInnerTRPCContext } from '@/server/api/trpc';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/utils/api';
import PageHead from '~/components/MetaTags';
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

  if (!id) return {
    notFound: true
  }
  // console.log("IDDDDDDDDDDDDD", id)
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




const SingleJobPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>,) => {
  const { data: job } = api.jobs.single.useQuery({ id: props.id });
  const savedSeeker = window !== undefined ? getJobSeeker() : undefined;
  const checkIsAlreadyApplied = () => {
    if (window !== undefined) return;
    if (!savedSeeker || !job || job === null) return false;
    return isAlreadyApplied(savedSeeker.id, job.id);
    // return false;
  }


  if (!job) {
    return <div></div>
  }

  return (
    <>
    <PageHead
      title={job.title}
      desc={job.summary||''}
    />
      <JobPageHeader />
      <div className="container mx-auto px-5">
        <StickyBox className='z-10 bg-white py-3 mb-5'>
          <div className="flex justify-between">
            <h1 className='text-xl md:text-4xl'>{job.title}</h1>
            <ApplyModal jobId={job.id} disabled={checkIsAlreadyApplied()} />
          </div>
          <div className="flex gap-5 justify-between md:justify-start">
            <p className='text-gray-400'>Posted on {dayjs(job.createdAt).fromNow()}</p>
          </div>
        </StickyBox>


        <div className=" grid grid-cols-1 gap-5 md:grid-cols-[auto_300px] xl:grid-cols-[auto_400px] items-start">
          <Card className='order-2 md:order-1'>
            <article className="prose lg:prose-xl">
              <div dangerouslySetInnerHTML={{ __html: job.desc || '' }}></div>
              <div dangerouslySetInnerHTML={{ __html: job.desc || '' }}></div>
            </article>
          </Card>
          <StickyBox offsetTop={100} className='hidden md:block order-2'>
            <JobPageSidebar job={job} />
          </StickyBox>
          <JobPageSidebar className='block md:hidden order-1' job={job} />
        </div>
      </div>
    </>
  )
}

export default SingleJobPage