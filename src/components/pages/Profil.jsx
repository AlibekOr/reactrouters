import React from 'react'
import { motion } from "framer-motion"
const Profil = () => {
    return (
        <motion.div className='containers profil'
            style={{ backgroundColor: '#e08c0ecc' }}
            transition={{ delay: .3 }}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(-100%)' }}>
            <div className="profil">
                Profil
            </div>
        </motion.div>
    )
}

export default Profil
