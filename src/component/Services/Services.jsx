import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designicon from '../../asset/Image/design.png'
import ecommerceicon from '../../asset/Image/ecommerce.png'
import webicon from '../../asset/Image/web.png'


function Services() {
    return (
        <>
            <Container>
                <h1 className="text-center servicetitle">Our Services</h1>
         
                <div className="bottom">      </div>

          
                <Row className="text-center ">
                    <Col lg={4} md={6} sm={12}>
                        <div className="servicecard" >
                    <img src={designicon} alt="" height="80px" width="80px"/>
                    <h2 className="servicename">UI/UX Design</h2>
                    <p className="servicedesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, omnis tempora pariatur vitae nihil molestiae voluptatem esse assumenda nulla blanditiis quos totam, ipsa a excepturi expedita, in quia optio ad!</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div  className="servicecard" >
                    <img src={ecommerceicon} alt="" height="80px" width="80px" />
                    <h2 className="servicename" >Ecommerce </h2>
                    <p  className="servicedesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi amet ullam nisi laudantium distinctio sapiente cupiditate error  </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div className="servicecard" >
                    <img src={webicon} alt="" height="80px" width="80px" />
                    <h2 className="servicename">Web Development</h2>
                    <p  className="servicedesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quasi minus? Et saepe, animi omnis, sit ea iusto iste quam sint voluptate similique obcaecati. Doloremque ex illum exercitationem esse unde.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services
