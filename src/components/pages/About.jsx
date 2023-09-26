import React from 'react'
import { motion } from "framer-motion"
import "../../index.css"
const About = () => {
    return (
        <motion.div className='containers '
            style={{ backgroundColor: '#c8f254d5' }}
            transition={{ delay: .3 }}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(100%)' }}
        >
            <div className="about">About</div>
        </motion.div >
    )
}

export default About
