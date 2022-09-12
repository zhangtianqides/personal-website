import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from '../../components/MailchimpForm'

import logo from '../../assets/img/logo.svg'
import navicon1 from '../../assets/img/nav-icon1.svg'
import navicon2 from '../../assets/img/nav-icon2.svg'
import navicon3 from '../../assets/img/nav-icon3.svg'

import './index.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="#home"><img src={navicon1} alt="" /></a>
                            <a href="#home"><img src={navicon2} alt="" /></a>
                            <a href="#home"><img src={navicon3} alt="" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
} 
