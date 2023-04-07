import Image from 'next/image'
import React, { useState } from 'react'
import NavLink, { type NavLinkProps } from './Navlink'
import { nanoid } from 'nanoid';
import { Button, Drawer, List } from 'antd';
import { CustomerServiceOutlined, MenuOutlined } from '@ant-design/icons';
import MobileNav from './MobileNav';
import Logo from './Logo';
import Link from 'next/link';

const Nav = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const navLinks: NavLinkProps[] = [
        {
            href: '/',
            lable: 'Home'
        },
        {
            href: '/about',
            lable: 'About Us'
        },
        {
            href: '/team',
            lable: 'Our Team'
        },

        {
            href: '#',
            lable: 'Services',
            childLinks: [
                {
                    href: '/services/consultancy',
                    lable: 'Managment Consultancy',
                },
                {
                    href: '/services/hr',
                    lable: 'HR Consultancy'
                },
                {
                    href: '/services/e-sport',
                    lable: 'E-Sports'
                },
                {
                    href: '/services/education',
                    lable: 'International Education Service'
                },
                {
                    href: '/services/web-development',
                    lable: 'Web & App Development'
                },
                {
                    href: '/services/entertainment',
                    lable: 'Graphics & Media Services'
                },
            ]
        },
        {
            href: '/jobs',
            lable: 'Jobs'
        },
        // {
        //     href: '#',
        //     lable: 'Blog'
        // },
        {
            href: '/contact',
            lable: 'Contact Us'
        },
    ]

    return (
        <>
            <nav className='w-full bg-white'>
                <div className="container mx-auto px-5 flex items-center py-1">
                    <div className="flex flex-grow-0 items-center">
                        <Link href="/"><Logo/></Link>
                    </div>

                    <div className="flex-grow">
                        <div className="w-full hidden md:flex items-center justify-center gap-4 ">
                            {
                                navLinks.map(link => {
                                    return <div key={nanoid()}><NavLink {...link} /></div>
                                })
                            }
                        </div>
                    </div>

                    <div className="flex-grow-0 w-max space-x-2 flex">
                        <a href='tel:7007628038' className='hidden md:block'><Button type="primary" size='large' icon={<CustomerServiceOutlined />}>+91 7007628038</Button></a>
                        <a href='tel:7007628038' className='block md:hidden'><Button type="primary" icon={<CustomerServiceOutlined />}></Button></a>
                        <Button className='md:hidden' onClick={showDrawer} icon={<MenuOutlined/>}></Button>
                    </div>
                </div>
            </nav>

            <Drawer title="Aryan International LLC" width={265} placement="left" onClose={onClose} open={open}>
                <MobileNav navLinks={navLinks} onChange={() => onClose()}/>
            </Drawer>
        </>
    )
}

export default Nav