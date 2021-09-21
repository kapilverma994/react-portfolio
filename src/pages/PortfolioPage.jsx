import React from 'react'
import Footer from '../component/Footer/Footer'
import PageTop from '../component/PageTop/PageTop'
import RecentProject from '../component/RecentProject/RecentProject'
import TopNavigation from '../component/TopNavigation/TopNavigation'

const PortfolioPage = () => {
    return (
    <>
           <TopNavigation />
                   <PageTop pagetitle="Our Portfolio" />
                   < RecentProject/>
                   <Footer />
    </>
    )
}

export default PortfolioPage
