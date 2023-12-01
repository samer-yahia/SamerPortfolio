import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'

import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss'

const abouts = [
  {title: 'Full-Stack', description: 'I am a Full-Stack Developer.', imgUrl: images.fullStack },
  {title: 'Backend Development', description: 'I am a strong Backend programmer.', imgUrl: images.backEnd},
  {title: 'Server Management', description: 'I am an avid learner of cloud platforms.', imgUrl: images.cloudServer},
  {title: 'Python', description: 'My strongest language is Python.', imgUrl: images.python2},
  {title: 'MERN', description: 'MERN is my favorite full stack.', imgUrl: images.mernStack}
]

const About = () => {
  return (
    // Make this more applicable to me.
    <> 
      <h2 className="head-text">I know That <span>Good Code</span> <br /> means <span>Great Impact</span></h2>
      <div className='about_layout'>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2> 
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> 
            </motion.div>
          ))}
        </div>
        
        <div className='about_paragraph'>
					<p>
						I am a passionate and adaptable professional who thrives in close-knit, dynamic environments where meaningful work 
						is at the forefront. With a diverse range of interests, including gaming, nature, and sports, I bring a unique blend 
						of creativity and analytical thinking to everything I do. What truly fuels my drive, however, is the opportunity to
						build meaningful relationships with both colleagues and clients alike.
            <br /> <br />
            My journey began in the medical field, where I 
						found motivation in making positive heatlth improvements in my patient's lives. As I navigated the healthcare system, 
						I realized that my true calling lay elsewhere, in the world of coding and technology. Coding, which began as a hobby, 
						has now become my profession and creative outlet. I am particularly drawn to backend development, automation, AI, and 
						even dabble in mobile game development on the side. I am eager to continue my professional growth and contribute 
						my skills to projects that have a positive impact on people's lives.
					</p>
				</div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about'
  );