import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const Summary = () => {
    return (
    <>
       <Container fluid  className="summaryBanner p-0">
        <div className="summaryOverlay">
    <Container  className="text-center" > 
    <Row>

<Col lg={8} md={6} sm={12}>
     <Row  className="countSection ">
          <Col >
       
          <FontAwesomeIcon className="iconProject" icon={faGlobe} />
           <h1 className="countNumber">

               <CountUp start={0} end={35000}>
  {({ countUpRef, start }) => (
     <VisibilitySensor onChange={start} delayedCall>
      <span ref={countUpRef} />
      </VisibilitySensor>   
  )}
</CountUp>  
 </h1> 
          <h4 className="countTitle">Companies Worldwide</h4>
          <hr className="bg-white  w-25" />
          </Col>

          <Col>
          <FontAwesomeIcon className="iconProject" icon={faLaptop} />
           <h1 className="countNumber">

               <CountUp start={0} end={100}>
  {({ countUpRef, start }) => (
     <VisibilitySensor onChange={start} delayedCall>
      <span ref={countUpRef} />
      </VisibilitySensor>   
  )}
</CountUp>  
 </h1> 
          <h4 className="countTitle">Companies Worldwide</h4>
          <hr className="bg-white w-25" />
          </Col>

          <Col>
          <FontAwesomeIcon className="iconProject" icon={faStar} />
           <h1 className="countNumber">

               <CountUp start={0} end={50}>
  {({ countUpRef, start }) => (
     <VisibilitySensor onChange={start} delayedCall>
      <span ref={countUpRef} />
      </VisibilitySensor>   
  )}
</CountUp>  
 </h1> 
          <h4 className="countTitle">Companies Worldwide</h4>
          <hr className="bg-white w-25" />
          </Col>


     </Row>
</Col>







<Col lg={4} md={6} sm={12}>
<Card className="workCard" >

<Card.Body>
  <Card.Title className="cardTitle" >What We Achieved</Card.Title>
  <Card.Text>
  <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirment Gathering </p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> System Analysis </p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Coding Testing </p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Implementation </p>
  </Card.Text>

</Card.Body>
</Card>
</Col>

               </Row>
    </Container>
        </div>
      </Container>
    </>
    )
}

export default Summary
