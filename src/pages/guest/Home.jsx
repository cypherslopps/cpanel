import React from 'react';
import { companyFeatures, heroContent, appDescription, companyServices, companyFollowLinks, companyAbout } from '../../lib/constants';
import { Container, Heading, SEO } from '../../components';
import { Card } from '@tremor/react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../config';

function Home() {
  const { heading, content } = heroContent;
  const { image, title, content: appDescriptionContent } = appDescription;
 
  return (
    <>
    {/* SEO */}
      <SEO 
        title={APP_NAME}
        description={heading}
      />


      {/* Hero */}
      <section className='h-full hero pb-12 sm:pb-0 sm:h-[35rem] xl:h-[34rem] text-white before:block before:absolute before:w-full before:h-full before:-z-20 before:bg-black/40 relative z-40 overflow-hidden'>
        <div className="wrapper mx-auto pt-28 pb-12 xs:pt-36 sm:pt-32 lg:pb-0 md:pt-36 w-[96%] xs:w-[93%] phone-sm:w-[86%] md:w-[78%] md-xl:w-3/4 lg:w-11/12 xl:pt-44 xl:w-[88%]">
          {/* Hero content */}
          <div className="content mx-auto w-full lg:w-9/12 flex flex-col items-center lg:items-start lg:text-left gap-y-2 xs:gap-y-3.5 sm:pt-6 md:pt-0">
            <h1 className="font-extrabold text-center text-[1.7rem] leading-[1.1] xxs:text-[1.9rem] xs:text-4xl xs:leading-[1.2] phone-sm:text-[2.5rem] sm:text-5xl sm-md:text-5xl md:text-[3.2rem] tracking-tighter md:-tracking-[0.05em] sm:leading-[1.1] md-lg:text-5.6xl lg:text-[3.5rem] xl:text-[4rem] text-shadow">
              {heading}
            </h1>
            <p className="text-white/90 text-center text-[.82rem] xxs:text-[.84rem] xs:text-sm sm:text-[.94rem] xs:leading-relaxed tracking-normal md:text-base lg:text-[1.06rem] leading-normal md-xl:leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </section>

      <Container>
        {/* About us */}
        <section className='py-8 sm:py-10 md:py-14 lg:py-16 grid grid-cols-1 md-lg:grid-cols-[43%,1fr] gap-y-7 md-lg:gap-2 md-xl:gap-4 lg:gap-x-8 xl:gap-x-12'>
          <header className='text-center md-xl:text-left space-y-2 md:mt-6'>
            <Heading size="default">What is Placeholder?</Heading>
            <p className='text-sm xxs:text-[.92rem] xs:w-11/12 sm:w-4/5 xxs:mx-auto sm:text-md sm:text-[.92rem] md-xl:mx-0 md-xl:text-md md-lg:w-full text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi praesentium repudiandae tenetur doloremque. Iure asperiores facilis nulla dolor.</p>
          </header>

          {/* Cards */}
          <div className='grid grid-cols-1 xs:grid-cols-2 gap-3 sm:mx-auto xxs:w-11/12 xxs:mx-auto xs:w-full xs:mx-0 sm:w-11/12 md-lg:w-full lg:gap-x-5'>
            {Object.entries(companyFeatures).map(([key, data]) => (
              <div className={`${key === "first" ? "md:mt-4" : ""} space-y-3 lg:space-y-4`}>
                {data.map(({ Icon, title, content }) => (
                  <blockquote className='rounded-md bg-gray-100 flex flex-col items-center gap-y-4 md:gap-y-5 py-4 md:py-6 px-3 xxs:px-2 md:px-3 xl:px-4 group transition-all duration-200 hover:scale-[1.02] hover:cursor-pointer hover:bg-black shadow-md shadow-gray-50'>
                    <Icon className='w-9 h-9 stroke-secondary-300 group-hover:stroke-secondary-500' />

                    <div className='space-y-1 md:space-y-2 text-center'>
                      <Heading size="xxs" className="group-hover:text-white/95">{title}</Heading>
                      <span className='text-[.83rem] md:text-[.85rem] lg:text-sm text-gray-800 group-hover:text-white/80'>{content}</span>
                    </div>
                  </blockquote>
                ))}
              </div>
            ))}
            {/* <div className='mt-3 space-y-3'>
              
              <blockquote className='rounded-md bg-gray-100'>
                <span>
                  
                </span>
              </blockquote>

              <blockquote className='rounded-md bg-gray-100'>
                2
              </blockquote>
            </div>

            <div className='space-y-3'>
              <blockquote className='rounded-md bg-gray-100'>
                1
              </blockquote>

              <blockquote className='rounded-md bg-gray-100'>
                2
              </blockquote>
            </div> */}
          </div>
        </section>

        {/* Brief description of our services */}
        <section className='grid grid-cols-1 gap-y-3 sm:gap-y-5 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 py-8 md:py-12'>
          <img 
            src={image}
            alt="description"
            className='object-contain h-40 md:object-cover w-full sm:h-60 md:h-[23rem] border border-gray-200'
          />

          {/* Content */}
          <div className='space-y-3 md:space-y-5 mt-2 md:py-12'>
            <Heading size="sm">{title}</Heading>
            <div className='space-y-3'>
              {appDescriptionContent.map(text => (
                <p
                  key={text}
                  className='text-gray-800/90 text-sm xs:text-[.9rem] sm:text-md'
                >{text}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='pt-6 pb-8 md:py-12 space-y-5 xs:space-y-6 md:space-y-9'>
          <Heading size="lg">Our Services</Heading>

          {/* Services collection */}
          <div className='grid grid-cols-1 gap-y-3 xs:grid-cols-2 md:grid-cols-4 xs:gap-4'>
            {companyServices.map(({ Icon, title }) => (
              <div className='flex items-center gap-x-2 xs:flex-col xs:gap-1 xs:items-start'>
                <Icon className='w-8 h-8 xs:w-14 xs:h-14 md:w-16 md:h-16' />
                <h5 className="text-md xs:text-base sm:text-[1.07rem] md:text-[1.1rem] font-medium capitalize">{title}</h5>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Info */}
      <section className="bg-tremor-content-strong text-white py-6 md:py-12 md:mt-10 md:mb-8">
        <div className='w-[90%] md:w-[94%] lg:w-11/12 mx-auto space-y-4'>
          <Heading size="sm" className="text-white">Cheap Placeholder Panel</Heading>
          <p className='opacity-90 text-sm sm:text-md md:text-base'>Most, <span className='font-bold'>Placeholder Panels</span> are only acting as an intermediary without beign able to provide the service and they have to charge you more. But here the intermediary is removed and you buy directly from the main provider. Our team's focus is always on reducing the price. In addition to applying discounts to good customers, we also try to keep the general price low. This is one of the most important features of our panel.</p>
        </div>
      </section>
      
      <Container>
        {/* App Socials */}
        <section className='pt-6 pb-10 md:pt-10 md:pb-14 grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-4'>
          <Card className='space-y-5'>
            <Heading size="xxs">Follow smmstone in social media</Heading>

            {/* Links */}
            <div className='grid grid-cols-3 gap-y-3'>
              {companyFollowLinks.map(({ Icon, title, link }) => (
                <Link to={link} className='flex items-center gap-x-1 text-sm text-primary-500'>
                  <Icon className="w-5 h-5" />
                  {title}
                </Link>
              ))}
            </div>
          </Card>

          {/* About */}
          <Card className='space-y-3'>
            <Heading size="xxs">About us</Heading>
            
            {/* Content */}
            <div className='space-y-5'>
                <p className="text-sm sm:text-md md:text-[.96rem] text-gray-800">{companyAbout.about}</p>
                <div className="flex items-center gap-x-1">
                  <span className='text-primary-500 font-medium text-sm sm:text-md'>Contact:</span>
                  <span className='text-sm sm:text-md text-gray-800'>{companyAbout.contact}</span>
                </div>
            </div>
          </Card>
        </section>
      </Container>
    </>
  )
}

export default Home