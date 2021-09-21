import React from 'react'
import ContactSec from '../component/ContactSec/ContactSec'
import Footer from '../component/Footer/Footer'
import PageTop from '../component/PageTop/PageTop'
import Services from '../component/Services/Services'


import TopNavigation from '../component/TopNavigation/TopNavigation'
const AllServices = () => {
    return (
      <>
       <TopNavigation/>
                  <PageTop pagetitle="Our Services" />
                  <Services />
                  <ContactSec />
                  <Footer />
      </>
    )
}

export default AllServices
