import React from 'react'
import { useState } from 'react'
import './index.css'

import { Container, Row, Col } from 'react-bootstrap';

import contactImg from '../../assets/img/contact-img.svg';

export default function Contact() {

    const fromInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [fromDetails, setFromDetails] = useState(fromInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFromUpdate = (categroy, value) => {
        setFromDetails({
            ...fromDetails,
            [categroy]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Send...')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'Applocation/json;charset=utf-8' },
            body: JSON.stringify(fromDetails)
        })
        setButtonText('Send')
        let result = response.json()
        setFromDetails(fromInitialDetails)
        if (result.code === 200) {
            setStatus({ success: true, message: 'message sent success' })
        } else {
            setStatus({ success: false, message: 'message sent false' })
        }
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-item-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="contactImg" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row className='from'>
                                <Col sm={6} className='px-1 fromitem ' >
                                    <input type="text" value={fromDetails.firstName} placeholder='First Name' onChange={(item) => onFromUpdate('firstName', item.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1 fromitem'>
                                    <input type="text" value={fromDetails.lastName} placeholder='Last Name' onChange={(item) => onFromUpdate('lastName', item.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1 fromitem '>
                                    <input type="email" value={fromDetails.email} placeholder='Email' onChange={(item) => onFromUpdate('email', item.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1 fromitem'>
                                    <input type="tel" value={fromDetails.phone} placeholder='Phone' onChange={(item) => onFromUpdate('phone', item.target.value)} />
                                </Col>
                                <Col className='textarea fromitem' >
                                    <textarea rows="6" value={fromDetails.message} placeholder='Message' onChange={(item) => onFromUpdate('message', item.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && <Col><p className={status.success === false ? 'danger' : 'success'}>{status.message}</p></Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
