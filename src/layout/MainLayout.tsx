import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react'
import DashboardLayout from './DashboardLayout';
import GuestLayout from './GuestLayout';

const MainLayout = (props: PropsWithChildren) => {
    const {asPath} = useRouter()
    const {data} = useSession();

    const isDashboardLayoutActive = () => {
        return asPath.includes('admin')
    }

  return (
    <>
    {
        isDashboardLayoutActive() ?
        <DashboardLayout>{props.children}</DashboardLayout>
        : <GuestLayout>{props.children}</GuestLayout>
    }
    </>
  )
}

export default MainLayout