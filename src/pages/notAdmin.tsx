import { Button } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const notAdmin = () => {
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='text-4xl max-w-lg'>You are not ADMIN!</h1>

                <div className="flex items-center gap-5">
                    <Link href="/"><Button type="primary" size="large">Go Home</Button></Link>
                    <Button size="large" onClick={() => void signOut({callbackUrl: '/', redirect: true})}>Logout</Button>
                </div>
            </div>

        </div>
    )
}

export default notAdmin