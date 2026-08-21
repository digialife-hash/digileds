import React from 'react'
import Herosection from '../ui/Herosection'
import Footer from '../ui/Footer'
import Abouts from "./Abouts"
import KeyFeatures from '../ui/Keyfeatures'


function Home() {
  return (
    <>
    <div>
        <Herosection/>
    </div>
    <div>
        <Abouts/>
         <KeyFeatures/>
        <Footer/>
    </div>
    </>
  )
}

export default Home