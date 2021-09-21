import React from 'react'
import Courses from '../component/Courses/Courses'
import Footer from '../component/Footer/Footer'
import PageTop from '../component/PageTop/PageTop'
import TopNavigation from '../component/TopNavigation/TopNavigation'

const AllCourse = () => {
    return (
      <>
         <TopNavigation />
                   <PageTop pagetitle="All Courses" />
                   <Courses />
                   <Footer />
      </>
    )
}

export default AllCourse
