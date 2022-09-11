import React from 'react'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import ProjectCard from './ProjectCard'

import backdir2 from '../../assets/img/color-sharp2.png';

import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';

import './index.css'

export default function Projects() {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <div>
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col size={12}>
                            <h2>Projects</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" >
                                    <Tab.Pane eventKey='first'>
                                        <Row>{projects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}</Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <Row>{projects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}</Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <Row>{projects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}</Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img src={backdir2} className='background-image-right' alt='bg' />
            </section>
        </div >
    )
}

