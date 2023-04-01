import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body className='text-primary-dark'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document