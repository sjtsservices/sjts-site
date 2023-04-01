import { JobListItem } from '@/schema/Job.schema'
import superjson from 'superjson';
import dayjs from 'dayjs';
import React from 'react'
import JobPageHeader from '~/components/job/JobPageHeader';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Button, Card, Result, Tabs, TabsProps } from 'antd';
import StickyBox from 'react-sticky-box';
import JobPageSidebar from '~/components/job/JobPageSidebar';
import ApplyModal from '~/components/applicant/ApplyModal';
import { isAlreadyApplied } from '@/helpers/handleSubmissionLocally';
import { getJobSeeker } from '@/helpers/handleJobseekerLocally';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { appRouter } from '@/server/api/root';
import { createInnerTRPCContext } from '@/server/api/trpc';
import { getServerAuthSession } from '@/server/auth';
import { api } from '@/utils/api';
import Link from 'next/link';
import { AppstoreOutlined, EditOutlined, FilePdfOutlined } from '@ant-design/icons';
import FullScreenLoader from '~/components/FullScreenLoader';
import ApplicantSidebar from '~/components/applicant/ApplicantSidebar';
import ApplicationGrid from '~/components/applicant/ApplicationGrid';
import PdfViewer from '~/components/applicant/PdfViewer';
import ApplicantCard from '~/components/applicant/ApplicantCard';
import ApplicationCard from '~/components/applicant/ApplicationCard';
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
  /*
   * Prefetching the `post.byId` query here.
   * `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead.
   */
  await ssg.jobSeekers.single.prefetch({ id });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id
    },
  };
}





const ViewApplicant = ({ id }: InferGetServerSidePropsType<typeof getServerSideProps>,) => {
  const { data: jobSeeker, isLoading } = api.jobSeekers.single.useQuery({ id });
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <span><AppstoreOutlined/> Application</span>,
      children: <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 justify-items-center gap-5'>
        {
          jobSeeker?.applications.map(app => {
            return <ApplicationCard key={app.id} application={app} />
          })
        }
      </div>,
    },
    {
      key: '2',
      label: <span><FilePdfOutlined/> Resume</span>,
      children: <>
        {
          !jobSeeker ? <FullScreenLoader /> : <PdfViewer url={jobSeeker.cvUrl} />
        }
      </>,
    },

  ];

  if (!jobSeeker) {
    return <Result status={404} title="Applicant Profile not found!" className='min-h-[calc(100vh - 100px)]' />
  }

  if (isLoading) return <FullScreenLoader />



  return (
    <>
      <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-[250px_auto]">
        <ApplicantSidebar applicant={jobSeeker} />
        <div className="h-full mx-auto w-full">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </>
  )
}

export default ViewApplicant