/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from 'antd'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import Logo from '../Logo';
import { DribbbleOutlined, FacebookOutlined, InstagramOutlined, LinkOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { useSiteInfo } from '~/lib/hooks/useSiteInfo';


export type FooterLinkListItem = {
  href: string,
  lable: string
}

export const nameIconMap: {[key:string]: any} = {
  twitter: <TwitterOutlined/>,
  facebook: <FacebookOutlined/>,
  dribbble: <DribbbleOutlined/>,
  instagram: <InstagramOutlined/>,
  linkedin: <LinkedinOutlined/>
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

const FooterIconList = () => {
  const {info} = useSiteInfo();
  return <div className='flex flex-wrap items-center'>
      {
        info && info.socialLinks.map(sl => {
          const sLink = sl as {name: string, link: string};
          return sl && sl !== null ?<a  href={sLink.link} key={nanoid()}><Button type="link" size="large"  icon={nameIconMap[sLink.name]||<LinkOutlined/>}></Button></a>: undefined
        })
      }
  </div>
}

const Footer = () => {
  const { data: session } = useSession();

  const AdminButton = session ? <Link href={'/admin'}><Button type="dashed" size='large'>Dashboard</Button></Link> : <Button type="dashed" size='large' onClick={() => signIn()}>Admin Login</Button>;
  return (
    <>
      
      <footer className='w-full  bg-gradient-to-r from-[#120d50] to-[#0a0185] text-white'>
        <div className='grid grid-cols-4 justify-items-center items-start py-12 gap-3'>
          <div className="col-span-4 md:col-auto  ">
            <div className="flex flex-col items-center">
            <Link href="/"><Logo/></Link>
            <div className="mt-1 text-center">
              <p className='text-xl uppercase text-red-800 font-bold'>Aryan International LLC</p>
              <p className='text-xl uppercase text-blue-700'>Continuity is sign of life</p>
            </div>
            </div>
          </div>

          <div className="col-span-2 md:col-auto">
            <FooterLinkList title="Important Link" list={[
              { href: '/', lable: 'Home' },
              { href: '/contact', lable: 'Contact Us' },
              { href: '/jobs', lable: 'Jobs' }
  
            ]} />
          </div>
          <div className="col-start-3 col-end-5 md:col-auto">
            <FooterLinkList title="Company" list={[
              { href: '/about', lable: 'About Us' },
              { href: '/team', lable: 'Our Team' },
              { href: '/terms-condition', lable: 'Terms & Condition' },
              { href: '/privacy-policy', lable: 'Privacy Policy' },

            ]} />
          </div>

          <div className="col-span-4 md:col-auto">
            <div className="max-w-[200px]"><FooterIconList/></div>
            {
              AdminButton
            }
          </div>
        </div>
        <div className="flex items-center justify-center border-0 border-t border-solid border-gray-500 py-3">
          <p className='text-xs font-bold'> &#169; Aryan International LLC - {dayjs(Date.now()).format('YYYY')}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer