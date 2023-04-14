import Head from 'next/head'
import React from 'react'

export type MetaTagsProps = {
    title: string,
    desc: string,
    image?: string,
    baseUrl?: string,
    children?: any
}

const PageHead = ({
    title,
    desc,
    image='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
    baseUrl=process.env.NEXTAUTH_URL||'',
    children
}: MetaTagsProps) => {

    
    return (
        <Head>

            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={desc} />


            <meta property="og:type" content="website" />
            <meta property="og:url" content={baseUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={image} />


            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={baseUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={image}></meta>

            {children}
        </Head>

    )
}

export default PageHead