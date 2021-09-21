import React from 'react'
import Services from "../component/Services/Services";
import TopBanner from "../component/TopBanner/TopBanner";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import Analysis from "../component/Analysis/Analysis";
import Summary from "../component/Summary/Summary";
import RecentProject from "../component/RecentProject/RecentProject";
import Courses from "../component/Courses/Courses";
import ClientReview from "../component/ClientReview/ClientReview";
import About from "../component/About/About";
import Footer from "../component/Footer/Footer";
const HomePage = () => {
    return (
    <>
 <TopNavigation/>
<TopBanner/>
<Services/>
<Analysis/>
<Summary/>
<RecentProject/>
<Courses/>
<ClientReview/>
<About />
<Footer/>
    </>
    )
}

export default HomePage
