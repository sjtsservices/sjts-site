/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from 'antd'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

export type FooterLinkListItem = {
  href: string,
  lable: string
}

const FooterLinkList = ({ list, title }: { list: FooterLinkListItem[], title: string }) => {
  return (
    <div className='space-y-1'>
      <h3 className='text-gray-400'>{title}</h3>
      <ul className='list-none'>
        {
          list.map(l => {
            return <li key={nanoid()}><Link className='decoration-0 text-gray-100 hover:decoration-1 hover:text-gray-200 transition-all duration-300' href={l.href}>{l.lable}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

const Footer = () => {
  const { data: session } = useSession();

  const AdminButton = session ? <Link href={'/admin'}><Button type="dashed" size='large'>Dashboard</Button></Link> : <Button type="dashed" size='large' onClick={() => signIn()}>Admin Login</Button>;
  return (
    <>
      <div className="h-20">
      </div>
      <footer className='w-full bg-indigo-900 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start py-12'>
          <div className="">
            <Image src={'/assets/logo/sjts-log.png'} alt="logo" width={150} height={50} />
          </div>

          <div className="">
            <FooterLinkList title="Important Link" list={[
              { href: '/', lable: 'Home' },
              { href: '/contact', lable: 'Contact Us' },
              { href: '/jobs', lable: 'Jobs' }
            ]} />
          </div>
          <div className="">
            <FooterLinkList title="Company" list={[
              { href: '/about', lable: 'About Us' },
              { href: '/team', lable: 'Our Team' },
            ]} />
          </div>
          <div className="">
            {
              AdminButton
            }
          </div>
        </div>
        <div className="flex items-center justify-center border-0 border-t border-solid border-gray-500 py-3">
          <p className='text-xs font-bold'>SJTS - {dayjs(Date.now()).format('YYYY')}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer