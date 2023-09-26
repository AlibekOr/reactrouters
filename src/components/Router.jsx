import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import About from './pages/About'
import Profil from './pages/Profil'
import { AnimatePresence } from "framer-motion"
const Router = () => {
    return (
        <AnimatePresence>
            <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profil' element={<Profil />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Router
