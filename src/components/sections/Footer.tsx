/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from 'antd'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const {data: session} = useSession();
  return (
    <>
    <div className="h-20">
    </div>
    <footer className='h-72 w-full flex items-center justify-center bg-indigo-900'>
    {
      session ? <Link href={'/admin'}><Button type="dashed" size='large'>Dashboard</Button></Link> :<Button type="dashed" size='large' onClick={() => signIn()}>Admin Login</Button>
    }
    </footer>
    </>
  )
}

export default Footer