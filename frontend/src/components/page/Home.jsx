import React from 'react'
import Herosection from '../ui/Herosection'

import Footer from '../ui/Footer'
import Abouts from "./Abouts"
import KeyFeatures from '../ui/Keyfeatures'


// import Abouts from './Abouts'
import Services from './Services'
import DigitalAlifeShowcase from '../ui/Digitalalifeshowcase'
import IndustriesWeServe from '../ui/Industriesweserve'
import WhyChooseDigitalAlife from '../ui/Whychoosedigitalalife'
import OurClients from '../ui/Ourclients'
import OfficeAndReviews from '../ui/Officeandreviews'
 

function Home() {
  return (
    <>
    <div>
        <Herosection/>
    </div>
    <div>
      <Services/>
    </div>
    <div>
         <DigitalAlifeShowcase/>
    </div>
    <div>
         <IndustriesWeServe/>
    </div>
    <div>
         <WhyChooseDigitalAlife/>
    </div>
    <div>
         <OurClients/>
    </div>
    <div>
         <OfficeAndReviews/>
    </div>
    <div>
         <KeyFeatures/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Home