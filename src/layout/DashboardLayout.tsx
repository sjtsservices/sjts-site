/* eslint-disable @typescript-eslint/no-floating-promises */
import { Spin } from 'antd';
import {  useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { type PropsWithChildren, useEffect } from 'react'
import DashboardNav from '~/components/dashboard/DashboardNav';
import DashboardProvider from '~/lib/providers/DashboardProvider';


const DashboardLayout = (props: PropsWithChildren) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const checkAuth = () => {
    if (!session && status === 'unauthenticated') return router.push('/');
    if(session && status === 'authenticated' && session?.user.role !== 'ADMIN') {
      // console.log({session})
      return router.push('/notAdmin');
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  if (status === 'loading' || status === 'unauthenticated') {
    return <div className="w-full min-h-screen flex items-center justify-center ">
      <Spin size='large' />
    </div>
  }

  return (
    <>
        <DashboardProvider>
          <DashboardNav>
            <main className='h-full'>{props.children}</main>
          </DashboardNav>
        </DashboardProvider>
    </>
  )
}

export default DashboardLayout