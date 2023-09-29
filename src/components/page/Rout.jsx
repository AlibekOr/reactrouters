import React from 'react'
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
const btns = [
    {
        btn: 'btn-primary'
    },
    {
        btn: 'sumbit'
    },
    {
        btn: 'Click'
    },
    {
        btn: 'onClick'
    },
    {
        btn: 'clickBtn'
    },
]
const Rout = () => {
    return (
        <motion.div className='containers'
            transition={{ delay: .3 }}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(100%)' }}
        >
            {btns.map((i, key) => (
                <div key={key}>
                    {
                        <NavLink to={`/${i.btn}`}> {i.btn} </NavLink>
                    }
                </div>
            ))}
        </motion.div>
    )
}

export default Rout
