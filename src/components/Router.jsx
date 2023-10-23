import React from 'react'
import { Route, Routes } from "react-router-dom"
import AddTo from './AddTo'
const Router = () => {
    return (
        <Routes>
            <Route index path='/' element={<AddTo />} />
        </Routes>
    )
}

export default Router
