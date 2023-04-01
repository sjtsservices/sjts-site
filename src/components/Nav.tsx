import Image from 'next/image'
import React, { useState } from 'react'
import NavLink, { type NavLinkProps } from './Navlink'
import { nanoid } from 'nanoid';
import { Button, Drawer, List } from 'antd';
import { CustomerServiceOutlined, MenuOutlined } from '@ant-design/icons';
import MobileNav from './MobileNav';

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

        // {
        //     href: '#',
        //     lable: 'Company',
        //     childLinks: [
        //         {
        //             href: '#',
        //             lable: 'Our Partners',
        //         },
        //         {
        //             href: '#',
        //             lable: 'Our Team'
        //         },
        //         {
        //             href: '#',
        //             lable: 'About Us'
        //         }
        //     ]
        // },
        {
            href: '/jobs',
            lable: 'Jobs'
        },
        {
            href: '#',
            lable: 'Blog'
        },
        {
            href: '/contact',
            lable: 'Contact Us'
        },
    ]

    return (
        <>
            <nav className='w-full bg-white'>
                <div className="container mx-auto px-5 flex items-center py-3">
                    <div className="flex flex-grow-0">
                        <Image src={'/assets/logo/sjts-log.png'} alt="SJTS" width={100} height={30} priority />
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
                        <a href='tel:7984226239' className='hidden md:block'><Button type="primary" size='large' icon={<CustomerServiceOutlined />}>+91 7984226239</Button></a>
                        <a href='tel:7984226239' className='block md:hidden'><Button type="primary" icon={<CustomerServiceOutlined />}></Button></a>
                        <Button className='md:hidden' onClick={showDrawer} icon={<MenuOutlined/>}></Button>
                    </div>
                </div>
            </nav>

            <Drawer title="SJTS" width={265} placement="left" onClose={onClose} open={open}>
                <MobileNav onChange={() => onClose()}/>
            </Drawer>
        </>
    )
}

export default Nav