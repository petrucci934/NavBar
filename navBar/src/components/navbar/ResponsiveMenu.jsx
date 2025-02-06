import React from 'react'
import {motion,AnimatePresence } from'framer-motion'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
      {open &&(
        <motion.div 
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-100}}
        transition={{duration:0.3}}
        className=''
        >
          <div className='text-xl font-semibold md:hidden uppercase bg-gray-200 text-black py-10 m-6 rounded-3xl'>
            < ul className=' flex flex-col items-center gap-10'>
              <li><a href="#">Home</a></li>
              <li>Services</li>
              <li>Ticket</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu 