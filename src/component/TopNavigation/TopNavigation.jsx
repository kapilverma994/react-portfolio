import React,{useState,useEffect} from 'react'
import { Nav,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import posvatblack from '../../asset/Image/posvatblack.png'
import posvatwhite from '../../asset/Image/posvatwhite.png'
function TopNavigation() {
  useEffect(() => {
window.addEventListener('scroll',onscroll)
  });
const [navTitle, setnavTitle] = useState('navTitle')
const [navlogo, setnavlogo] = useState(posvatwhite)
const [navback, setnavback] = useState('navBackground')
const [navitem, setnavitem] = useState('navItem')
const [navVariant,setVariant] = useState('dark')
function onscroll(){
  if(window.scrollY>100){
setnavTitle("navTitleScroll")
setnavlogo(posvatblack)
setnavback('navBackgroundScroll')
setnavitem('navItemScroll')
setVariant('light')
  }else{
setnavTitle('navTitle')
setnavlogo(posvatwhite)
setnavback('navBackground')
setnavitem('navItem')
setVariant('dark')
  }
}
 
  return (
 <>
 <Navbar fixed="top"  className={navback} variant={navVariant} expand="lg" style={{height:"85px"}} >
  <Navbar.Brand className={navTitle} href="#home"><img src={navlogo} height="100px" width="100px" alt="" /></Navbar.Brand>
  <Navbar.Toggle className="test" aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
  
      <NavLink  exact className={navitem} activeStyle={{color:"#ffd900"}} to="/">Home</NavLink>
      <NavLink exact className={navitem} activeStyle={{color:"#ffd900"}} to="/about">About</NavLink>
      <NavLink exact className={navitem} activeStyle={{color:"#ffd900"}} to="/service">Services</NavLink>
      <NavLink exact className={navitem} activeStyle={{color:"#ffd900"}} to="/course">Courses</NavLink>
      <NavLink exact className={navitem} activeStyle={{color:"#ffd900"}} to="/contact-us">Contact us</NavLink>
      <NavLink exact className={navitem} activeStyle={{color:"#ffd900"}} to="/portfolio">Portfolio</NavLink>

   
    </Nav>

  </Navbar.Collapse>
</Navbar>
 </>
  )
}

export default TopNavigation
