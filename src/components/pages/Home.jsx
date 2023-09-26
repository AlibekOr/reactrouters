import React from 'react'
import { motion } from "framer-motion"
const Home = () => {
    return (
        <motion.div className='containers home' style={{ backgroundColor: '#2c54d6c0' }}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            transition={{ delay: .3 }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(0%)' }} >
            <div className="home">Home</div>
        </motion.div>
    )
}

export default Home