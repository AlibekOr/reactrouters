import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { motion } from "framer-motion"
const bt = [
    {
        name: 'alisa',
    },
    {
        name: 'jek',
    },
    {
        name: 'bob',
    },
    {
        name: 'hello',
    },
    {
        name: 'medical',
    },
]
const Rout2 = () => {
    const { id } = useParams()
    return (
        <motion.div className='containers'
            transition={{ delay: .3 }}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(100%)' }}>

            {bt.map((i, key) => (
                <div key={key}>
                    <NavLink to={`/${id}/${i.name}`}> {i.name} </NavLink >
                </div>
            ))}
            <NavLink to={'/'}>back</NavLink>
        </motion.div>
    )
}

export default Rout2
