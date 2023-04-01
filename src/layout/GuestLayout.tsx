import Head from 'next/head'
import React from 'react'
import Nav from '~/components/Nav'
import Footer from '~/components/sections/Footer'

const GuestLayout = ({children}: any) => {
  return (
    <>
    <Nav/>
    <main className=''>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default GuestLayout