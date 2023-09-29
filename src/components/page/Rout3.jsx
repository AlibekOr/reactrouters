import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { motion } from "framer-motion"
const Rout3 = () => {
    const { id, getID } = useParams()
    return (
        <motion.div
            transition={{ delay: .3 }}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(100%)' }}
        >
            <h1>{getID} hello </h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eveniet distinctio magnam a velit consequuntur itaque necessitatibus voluptatum porro, nostrum aspernatur dolore deserunt at culpa pariatur quae possimus eos nihil.
            <br />
            <NavLink to={`/${id}`}>back</NavLink>
        </motion.div>
    )
}

export default Rout3