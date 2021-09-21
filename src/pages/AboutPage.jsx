import React from 'react'
import About from '../component/About/About'
import AboutDescription from '../component/About/AboutDescription'
import Footer from '../component/Footer/Footer'
import PageTop from '../component/PageTop/PageTop'
import TopNavigation from '../component/TopNavigation/TopNavigation'

const AboutPage = () => {
    return (
     <>
                      <TopNavigation />  
                 <PageTop pagetitle="About Us" />  
                 <About />
                 <AboutDescription />
                 <Footer />
     </>
    )
}

export default AboutPage
