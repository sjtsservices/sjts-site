import React from 'react'

export type PageHeaderProps = {
  image?: string,
  title: string,
  className?: string,
  subTitle?: string
}

const defaultImage = '/assets/images/page-header.webp';

const PageHeader = ({ title, image, className, subTitle }: PageHeaderProps) => {
  return (
    <header className={`min-h-36 md:h-72 py-10 px-5 bg-cover bg-no-repeat bg-center relative flex items-center justify-center text-white`} style={{ backgroundImage: `url(${image || defaultImage})` }}>
      <div className="z-10 max-w-4xl text-center md:space-y-3">
        <h1 className="text-3xl md:text-6xl serif z-10 text-center ">{title}</h1>
        {
          subTitle && <p className='text-lg md:text-xl '>{subTitle}</p>
        }
      </div>
      <div className="absolute w-full h-full left-0 top-0 bg-primary-dark/60"></div>
    </header>
  )
}

export default PageHeader