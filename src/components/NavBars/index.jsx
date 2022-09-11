import React from 'react'
import { useEffect, useState } from 'react';

import { Container, Nav, Navbar, ThemeProvider } from 'react-bootstrap';

import './index.css'

import logo from '../../assets/img/logo.svg'
import navicon1 from '../../assets/img/nav-icon1.svg'
import navicon2 from '../../assets/img/nav-icon2.svg'
import navicon3 from '../../assets/img/nav-icon3.svg'


export default function NavBars() {

    const [activeLink, setActiveLink] = useState('home')

    const [scrolled, setScolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScolled(true)
            } else {
                setScolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.addEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <div>
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                minBreakpoint="xxs"
            >
                <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                    <Container >
                        <Navbar.Brand href="/">
                            <img src={logo} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            </Nav>
                            <span className="navbar-text">
                                {/* 这个练习方式小模块会根据屏幕宽度变小而隐藏 */}
                                <div className="social-icon d-md-none d-lg-block d-xl-block  d-xxl-block" >
                                    <a href="#"><img src={navicon1} alt="link" /></a>
                                    <a href="#"><img src={navicon2} alt="link" /></a>
                                    <a href="#"><img src={navicon3} alt="link" /></a>
                                </div>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </ThemeProvider>
        </div >
    )
}
