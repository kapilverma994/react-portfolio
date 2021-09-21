import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


function TopBanner() {
    return (
      <>
      <Container fluid  className="topFixedBanner p-0">
        <div className="topBannerOverlay">
          <Container className="topContent  ">
              <Row>
              <Col className="text-center">
              <h1 className="topTitle">Postvat Developer</h1>
              <h4 className="topSubtitle">Learn Professionally</h4>
              <Button variant="primary">Learn More</Button>
              </Col>
              </Row>
          </Container>
        </div>
      </Container>
      </>
    )
}

export default TopBanner
