import React from 'react'
import { Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Rout from "./page/Rout"
import Rout2 from './page/Rout2'
import Rout3 from './page/Rout3'
const Router = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Rout />} />
                <Route path='/:id' element={<Rout2 />} />
                <Route path='/:id/:getID' element={<Rout3 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Router
