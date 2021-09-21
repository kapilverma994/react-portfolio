import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart,ResponsiveContainer, XAxis,Tooltip } from 'recharts'

function Analysis() {
    const [data, setdata] = useState([
        {
            Technology: 'PHP',
            projects: 100
        },
    
        {
            Technology: 'Mysql',
            projects: 90
        },
        {
            Technology: 'Laravel',
            projects: 95
        },
        {
            Technology: 'React',
            projects: 85
        },
        {
            Technology: 'OpenCart',
            projects: 80
        },
        {
            Technology: 'Vue js',
            projects: 75
        },
        {
            Technology: 'Django',
            projects: 70
        },
        {
            Technology: 'Javascript',
            projects: 100
        }


    ]

    )
    return (
        <>
            <Container className="text-center">
                <h1 className="text-center servicetitle">Technology Used</h1>
                <div className="bottom">      </div>
                <Row>
                    <Col lg={6} md={12} style={{width:"100%",height:"300px"}}>
                    <ResponsiveContainer width="100%" height="100%">        
                     <BarChart width={100} height={300} data={data} >
                         <XAxis dataKey="Technology"/>
                         <Tooltip />
                     <Bar dataKey="projects" fill="#8884d8"/ >

                      
                         </BarChart>
                         </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12}>
                        <p className="servicedesc text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat amet ipsa, voluptatibus architecto vero ullam a. Vitae accusantium magni aperiam quidem veniam hic animi. Nesciunt expedita impedit distinctio asperiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, perferendis! Adipisci ipsum, provident, veniam eveniet explicabo quis vero iure amet dolorem suscipit fugit enim. Aspernatur quia laboriosam animi rem tempore.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Analysis
