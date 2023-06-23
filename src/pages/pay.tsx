import { Button, Divider } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdPayment } from 'react-icons/md'

const PayPage = () => {
    return (
        <div className='min-h-[500px] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className='aspect-square lg:aspect-auto bg-primary text-white flex items-center justify-center'>
                <div className='max-w-lg w-full space-y-5'>
                    <h1 className='text-4xl md:text-6xl font-bold uppercase text-clip bg-clip-text bg-gradient-to-tr from-white via-white to-slate-400 text-transparent'>Secure Payment for Our Consultancy Services</h1>
                    <p>Make a secure payment for our professional consultancy services using our convenient and reliable payment gateway.</p>

                    <div className='mt-5'>
                        <Link href="/contact"><Button size={'large'}>Contact Us</Button></Link>
                    </div>
                </div>
            </div>

            <div className='py-20 flex items-center justify-center'>
                <div className="max-w-lg">
                    <div className='space-y-3'>
                        <div className='text-lg font-bold text-gray-500'>Proceed to Payment</div>
                        <a href='https://buy.stripe.com/14kbMHgVv4ge76w5kl' target='_blank' className='inline-block'>
                            <Button size='large' type='primary' icon={<span className='anticon'><MdPayment /></span>}>Pay Now</Button>
                        </a>
                    </div>
                    <Divider>OR</Divider>
                    <div className='space-y-3'>
                        <div className='text-lg font-bold text-gray-500'>Scan QR Code for Instant Payment</div>
                        <div className='aspect-square relative'>
                            <Image src="/assets/images/payment-qr.jpg" alt="Payment QR" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayPage