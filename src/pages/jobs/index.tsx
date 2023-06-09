/* eslint-disable @typescript-eslint/require-await */
import dynamic from 'next/dynamic';
import React from 'react'
import { api } from '@/utils/api';


// import JobCard from '~/components/job/JobCard';
// import JobGrid from '~/components/job/JobGrid';
import PageHeader from '~/components/PageHeader';
import { Card, Skeleton } from 'antd';
import { nanoid } from 'nanoid';
// import JobGrid from '~/components/job/JobGrid';

const JobGrid = dynamic(
    () => import('~/components/job/JobGrid'), 
    { 
        ssr: false, 
        loading: () => {
            return (
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5'>
                    {
                        Array(4).fill(null).map(v => {
                            return <Card key={nanoid()} loading={true}></Card>
                        })
                    }
                </div>
            )
        }
    });




export async function getServerSideProps() {
    // const ssg = createProxySSGHelpers({
    //   router: appRouter,
    //   ctx: createInnerTRPCContext({session: null}),
    //   transformer: superjson,
    // });
  
    // void await ssg.jobs.list.prefetch({});
  
    // /* 
    //  * Prefetching the `post.byId` query here.
    //  * `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead.
    //  */
    // // await ssg.post.byId.prefetch({ id });
  
    return {
      props: {
        
      },
    };
  }


const JobsPage = () => {
    const {data: jobs, isLoading} = api.jobs.list.useQuery({}, {refetchOnWindowFocus: false});

    if (isLoading) {
        return (
            <>
                <div className='container mx-auto px-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        Array(4).fill(null).map(() => {
                            return (
                                <Card key={nanoid()}>
                                    <Skeleton avatar={{ shape: 'square' }} active />
                                </Card>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <PageHeader title='Be Part of Something Big' image='/assets/images/job-header.webp' subTitle='Discover Your Next Career Move with SJTS Private Limited' />
        {/* <CVUploaderInput/> */}
            {
                !jobs || jobs.data.length <= 0 &&
                <div className='min-h-[400px] flex items-center justify-center'>
                    <div className="max-w-3xl px-5">
                        <Card className='text-center'>
                            <h1 className='text-4xl mb-2 text-gray-700'>Currently no job openings available</h1>
                            <p className='text-gray-500 text-base md:text-lg leading-relaxed'>We are sorry, there are currently no job openings available. Please check back later for any updates. Thank you for your interest in our company.</p>
                        </Card>
                    </div>
                </div>
            }
            {
                (jobs && jobs.data.length > 0) && 
                <div className='my-10'>
                <JobGrid jobs={jobs.data} />
            </div>
            }
        </>
    )
}

export default JobsPage