import React from 'react'
import Sliping from '../Sliping'

import SwiperHome from '../SwiperHome'
import './index.css'

const Home = () => {
  return (
    <div>
        <Sliping/>
        <div className='home-bg'>
                <SwiperHome/>

        </div>
       
        
    </div>
  )
}

export default Home