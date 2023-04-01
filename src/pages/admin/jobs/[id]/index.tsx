import superjson from 'superjson';
import dayjs from 'dayjs';
import React from 'react'
import JobPageHeader from '~/components/job/JobPageHeader';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Button, Card, Tooltip } from 'antd';
import StickyBox from 'react-sticky-box';
import JobPageSidebar from '~/components/job/JobPageSidebar';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { appRouter } from '@/server/api/root';
import { createInnerTRPCContext } from '@/server/api/trpc';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/utils/api';
import Link from 'next/link';
import { AppstoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import DeleteJob from '~/components/job/DeleteJob';
import { useRouter } from 'next/router';
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




const SingleJobPage = ({ id }: InferGetServerSidePropsType<typeof getServerSideProps>,) => {
  const { data: job } = api.jobs.single.useQuery({ id });
  const router = useRouter();


  if (!job) {
    return <div></div>
  }

  return (
    <>
      <JobPageHeader />

      <div className="container mx-auto">
        <StickyBox className='z-10  py-3 mb-5'>
          <div className="flex flex-col md:flex-row gap-3 justify-between">
          <div className="flex flex-col justify-between md:justify-start">
            <h1 className='text-xl md:text-4xl'>{job.title}</h1>
            <p className='text-gray-400'>Posted on {dayjs(job.createdAt).fromNow()}</p>
          </div>
            <div className="flex gap-2">
              <Link href={`/admin/jobs/${id}/applications`}><Tooltip title="View All Submissions"><Button icon={<AppstoreOutlined />}>Submissions</Button></Tooltip></Link>
              <Link href={`/admin/jobs/${id}/edit`}><Tooltip title="Edit this job"><Button icon={<EditOutlined />}>Edit</Button></Tooltip></Link>
              <DeleteJob jobId={id} onDelete={() => void router.push('/admin/jobs')}><Button icon={<DeleteOutlined/>}></Button></DeleteJob>
            </div>
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
          <JobPageSidebar className='block md:hidden order-1' job={job}/>
        </div>
      </div>
    </>
  )
}

export default SingleJobPage