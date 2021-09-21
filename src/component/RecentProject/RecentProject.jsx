import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

const RecentProject = () => {
    return (
   <>
    <Container className="text-center">
               <h1 className="servicetitle">RECENT PROJECTS</h1>
               <div className="bottom">      </div>

                        <Row>
                             <Col lg={4} md={6} sm={12}>

                             <Card className="projectCard">
  <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg" />
  <Card.Body>
    <Card.Title className="servicename"> <h2 className="servicename"> Card Title</h2></Card.Title>
    <Card.Text className="servicedesc">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Site</Button>
  </Card.Body>
</Card>
                             </Col>

                             <Col lg={4} md={6} sm={12}>

                             <Card className="projectCard">
  <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg" />
  <Card.Body>
    <Card.Title  > <h2 className="servicename"> Card Title</h2></Card.Title>
    <Card.Text className="servicedesc">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Site</Button>
  </Card.Body>
</Card>
                             </Col>


                             <Col lg={4} md={6} sm={12}>
                             <Card className="projectCard">
  <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg" />
  <Card.Body>
    <Card.Title> <h2 className="servicename"> Card Title</h2></Card.Title>
    <Card.Text className="servicedesc">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Site</Button>
  </Card.Body>
</Card>

                             </Col>
                        </Row>

                   </Container>
   </>
    )
}

export default RecentProject
