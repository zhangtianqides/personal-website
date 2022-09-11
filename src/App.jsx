import React from 'react'
import NavBars from './components/NavBars'
import Banner from './components/Banner'
import Skill from './components/Skill'
import Project from './components/Project'

import './App.css'

export default function App() {
    return (
        <div>
            <NavBars />
            <Banner />
            <Skill />
            <Project />
        </div>
    )
}

