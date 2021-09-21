import React, { useEffect } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import face from '../../asset/Image/face.png';
import { init } from 'ityped'

const About = () => {
    useEffect(() => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Development!', 'Mobile Development!' ] })
    })
    return (
  <>

  <Container className="text-center">
             <h1 className="servicetitle">ABOUT US</h1>
               <div className="bottom"></div>
                         <Row>


     <Col lg={6} md={6} sm={12}>
          <div className="aboutMeImage">
     <img className="aboutImg" src={face} />
     </div>
     </Col>




     <Col lg={6} md={6} sm={12}>
          <div className="aboutMeBody">
               <h2 className="aboutMeDetails">HI There, We are</h2>
               <h2 className="aboutMeTitle">Posvat </h2>
               <h3 className="aboutMeDetails">Work as <span id="myElement"> </span> </h3>
            </div>

     </Col>

                         </Row>
                    </Container>

  </>
    )
}

export default About
