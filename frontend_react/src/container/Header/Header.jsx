import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { FiClipboard } from 'react-icons/fi';
import { AppWrap } from '../../wrapper'

import { TypeAnimation } from 'react-type-animation'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, my name is</p>
              <h1 className="head-text">Samer Yahia</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <TypeAnimation 
              sequence={[
                  "Full-Stack Developer", 1000,
                  "MERN Programmer", 1000,
                  "Azure Enthusiast", 1000,
              ]}
              wrapper='span'
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block'}}
              repeat={Infinity}
          />
          </div>

          <a href={images.resume2023} download="Samer's Resume 2023.pdf" className='resume-cmp app__flex'>
            <FiClipboard /> Download Resume
          </a>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5}}
        whileHover={{ scale: 1.1 }}
        className='app__header-img'
      >
        <img src={ images.portrait } alt="Samer's Profile Picture." />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='Profile Circle'
          className='overlay_circle'
        />

      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {/* CHANGE THIS TO YOUR TECHS */}
        {[images.flaskIcon, images.mernIcon, images.azureIcon].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img id={`${circle === images.mernIcon ? 'mern-icon' : ''}`} src={circle} alt='Circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');