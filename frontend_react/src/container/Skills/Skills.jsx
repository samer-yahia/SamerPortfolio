import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub, AiFillRest } from 'react-icons/ai'

import { Tooltip as ReactTooltip } from 'react-tooltip'
import { animate, motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

import { images } from '../../constants'
import './Skills.scss'

const Skills = () => {

  const [skillsList, setSkillsList] = useState([])

  const [workList, setWorkList] = useState([])

  const skills = [
    {
      name: 'Git',
      bgColor: '#',
      img: images.git
    },
    {
      name: 'Python',
      bgColor: '#',
      img: images.python
    },
    {
      name: 'HTML/CSS/JS',
      bgColor: '#',
      img: images.webFund
    },
    {
      name: 'MERN',
      bgColor: '#',
      img: images.react
    },
    // {
    //   name: 'NodeJS',
    //   bgColor: '#',
    //   img: images.node
    // },
    {
      name: 'MySQL',
      bgColor: '#',
      img: images.mySQL
    },
    {
      name: 'MongoDB',
      bgColor: '#',
      img: images.mongoDB
    },
    {
      name: 'Azure',
      bgColor: '#',
      img: images.azureIcon
    },
    {
      name: 'AWS',
      bgColor: '#',
      img: images.awsIcon
    },
    {
      name: 'Google Cloud',
      bgColor: '#',
      img: images.google
    },
    {
      name: 'Tailwind CSS',
      bgColor: '#',
      img: images.tailwind
    }
  ]

  const workExp = [
    { 
      year: 'Present',
      experience: [
        {
        name: 'IT and Full Stack Developer Lead',
        company: 'San Jacinto Valley Academy (SJVA)',
        desc: `
          I worked as a lead for the IT department of SJVA. 
          I would lead our team of IT employees and interns
          as well as develop full stack applications.
          `
        }
      ]
    },
    {
      year: '2021',
      experience: [
        {
          name: 'Full Stack Student',
          company: 'Coding Dojo',
          desc: `
            Fill out
          `
        }
      ]
    }
  ]


  return (
    <>
      <h2 className="head-text">Skills and Work Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5}}
              className='app__skills-item app__flex'
              key={ skill.name }
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={ skill.img } alt={ skill.name }/>
              </div>

              <p className="p-text">{ skill.name }</p>
            </motion.div>
          ))}
        </motion.div>


        <div className='app__skills-exp'>
            {workExp.map((work) => (
              <motion.div
                className='app__skills-exp-item'
                key={ work.year }
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{ work.year }</p>
                </div>

                <motion.div className='app__skills-exp-works'>
                  {work.experience.map((exp) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1]}}
                        transition={{ duration: 0.5}}
                        className='app__skills-exp-work app__flex'
                        data-tip
                        data-for={ exp.name }
                        key={ exp.name }
                      >
                        <h4 className="bold-text">{ exp.name }</h4>
                        <p className="p-text">{ exp.company }</p>
                      </motion.div>

                      <ReactTooltip
                        id={ exp.name }
                        effect="solid"
                        arrowColor="#fff"
                        className='skills-tooltip'
                      >
                        { exp.desc }
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills'
  );