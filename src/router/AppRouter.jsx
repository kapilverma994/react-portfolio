import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
  } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServices from '../pages/AllServices';
import AllCourse from '../pages/AllCourse';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';


const AppRouter = () => {
    return (
 <>
    <Switch>
          <Route exact path="/"  component={HomePage}/>
          <Route exact path="/service"  component={AllServices}/>
          <Route exact path="/course"  component={AllCourse}/>
          <Route exact path="/about"  component={AboutPage}/>
          <Route exact path="/contact-us"  component={ContactPage}/>
          <Route exact path="/portfolio"  component={PortfolioPage}/>
        </Switch>
        
 </>
    )
}

export default AppRouter
