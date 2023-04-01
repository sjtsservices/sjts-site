/* eslint-disable @typescript-eslint/no-misused-promises */
import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, type MenuProps } from 'antd'
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'


const UserAvatar = () => {
    const session = useSession()

    const items: MenuProps['items'] = [
        {
            label: <Link href="/u/account">Account</Link>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <span onClick={() => signOut()}>Logout</span>,
            key: '3',

        },
    ];

    const actionButton = () => {
        if (session && session.status === 'authenticated') {
            return <Button onClick={() => signOut()} icon={<LogoutOutlined />}>Log Out</Button>
        } else {
            return <Button type='primary' onClick={() => signIn()} icon={<LogoutOutlined />}>Sign In</Button>
        }
    }
    return (
        <div className='space-x-2 inline-flex items-center'>
            {
                session && session.status === 'authenticated' ?
                    <>
                        <Dropdown menu={{ items }} trigger={['click']} className="w-xs">
                            <Avatar src={session.data.user?.image} size="large"></Avatar>
                        </Dropdown>
                    </>
                    :
                    <Button type='primary' onClick={() => signIn()} icon={<LogoutOutlined />}>Sign In</Button>
            }

        </div>
    )
}

export default UserAvatar