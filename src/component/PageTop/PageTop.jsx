import React from 'react'
import { Button, Container, Row,Col } from 'react-bootstrap'

const PageTop = (props) => {
    return (
   <>       <Container fluid={true} className="topFixedPage p-0" >
   <div className="topPageOverlay">
   <Container className="topContentPage">
        <Row>
   <Col className="text-center">

<h4 className="topPageTitle">{props.pagetitle} </h4>


   </Col>
        </Row> 
   </Container> 
   </div>
        </Container>
   </>
    )
}

export default PageTop
