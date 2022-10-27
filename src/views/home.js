import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Group Representative</title>
        <meta
          property="og:title"
          content="International Group Representative"
        />
      </Helmet>
    </div>
  )
}

export default Home
