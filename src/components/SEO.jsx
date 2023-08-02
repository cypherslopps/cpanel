import React from 'react'
import { Helmet } from 'react-helmet-async'
import { APP_NAME } from '../config'

const SEO = ({ title, description }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="canonical" href={`https://www.${APP_NAME.toLowerCase()}.com/`} />

        {/* OG Meta tags */}
        <meta property="og:type" content="web app" />
        <meta property="og:title" content={title} />
        <meta property='og:description' content={description} />

        {/* Twitter */}
        <meta name="twitter:creator" content={APP_NAME} />
        <meta name="twitter:card" content="web app" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO