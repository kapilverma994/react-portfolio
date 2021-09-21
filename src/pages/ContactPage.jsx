import React from 'react'
import ContactSec from '../component/ContactSec/ContactSec'
import Footer from '../component/Footer/Footer'
import PageTop from '../component/PageTop/PageTop'


import TopNavigation from '../component/TopNavigation/TopNavigation'

const ContactPage = () => {
    return (
        <div>
             <TopNavigation />
                   <PageTop pagetitle="Contact Us" />
                   <ContactSec />
                   <Footer />
        </div>
    )
}

export default ContactPage
