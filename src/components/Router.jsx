import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "./modal/Modal";
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Modal />} />
        </Routes>
    )
}

export default Router