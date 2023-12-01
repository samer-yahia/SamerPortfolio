import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub, AiFillRest } from 'react-icons/ai'
import { animate, motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

import { images } from '../../constants'

// import { urlFor, client } from '../../client'

import './Work.scss'

const Work = () => {

  const works = [
    {
      title: 'SJVA Asset Checkout',
      projectLink: '#',
      gitLink: '#',
      img: images.sjvaCheckout,
      imgAlt: 'SJVA Asset Logo',
      description: `
          Employee credit card tracking system to log crucial information for 
          company purchasing and auditing.
          `,
      tag: ['Python/Flask', 'All']
    },
    {
      title: 'SJVA Lottery Program',
      projectLink: '#',
      gitLink: '#',
      img: images.sjvaLottery,
      imgAlt: 'SJVA Lotto Logo',
      description: `
          Lottery application which randomizes waitlisted student lottery numbers 
          from a google sheet based on number and grade level inputs.
          `,
      tag: ['Python/Flask', 'All']
    },
    {
      title: 'SJVA Credit Card Reconciliation',
      projectLink: '#',
      gitLink: '#',
      img: images.ccRecon,
      imgAlt: 'SJVA Lotto Logo',
      description: `
          Simple program designed to analyze excel sheets and match purchases with
          bank statement data. Program will then combine relevant data into one excel
          sheet for audit submission.
          `,
      tag: ['Python/Flask', 'All']
    },
    {
      title: "Samer's React Portfolio",
      projectLink: '#',
      gitLink: '#',
      img: images.portfolioLogo,
      imgAlt: 'React Portfolio Logo',
      description: `
        React Portfolio used to showcase who I am and my accomplishments, skills, and experience. 
        Gradual updates are continously made.
      `,
      tag: ['MERN', 'All']
    }
  ]

  const [activeFilter, setActiveFilter] = useState("All")

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const [filterWork, setFilterWork] = useState(works);

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query)
  //     .then((data) => {
  //       setWorks(data);
  //       setFilterWork(data);
  //     })
  // }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 })


    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if(item === 'All') {
        setFilterWork(works);

      } else {
        setFilterWork(works.filter((work) => work.tag.includes(item)))
      }

    }, 500);
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portolio</span></h2>

      <div className="app__work-filter">
        {['All', 'Python/Flask', 'MERN', 'Bootcamp Apps'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='app__flex'>
        {
          filterWork.map((work, index) => {
            return (
              <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5}}
                className='app__work-portfolio'
                key={`${index}-${activeFilter}`}
              > 
                {/* Image */}
                <div className="app__work-item app__flex">
                  <div className="app__work-img app__flex">
                    <img src={ work.img } alt={ work.imgAlt } />

                    <motion.div
                      whileHover={{ opacity: [0, 1]}}
                      transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                      className='app__work-hover app__flex'
                    >

                      {/* Project Link */}
                      <a href={ work.projectLink } target='_blank' rel='noreferrer'>
                        <motion.div
                          whileInView={{ scale: [0, 1]}}
                          whileHover={{ scale: [1, 0.9]}}
                          transition={{ duration: 0.25 }}
                          className='app__flex'
                        >
                        <AiFillEye />
                        </motion.div>
                      </a>

                      {/* Github Link */}
                      <a href={ work.gitLink } target='_blank' rel='noreferrer'>
                        <motion.div
                          whileInView={{ scale: [0, 1]}}
                          whileHover={{ scale: [1, 0.9]}}
                          transition={{ duration: 0.25 }}
                          className='app__flex'
                        >
                        <AiFillGithub />
                        </motion.div>
                      </a>

                    </motion.div>
                  </div>
                  
                  {/* Title, Description, and Tags */}
                  <div className="app__work-content app__flex">
                    <h4 className='bold-text'>{ work.title }</h4>

                    <p className='p-text' style={{ marginTop: 10}}>
                      { work.description }
                    </p>


                    <div className="app__work-tag app__flex">
                      <p className='p-text'>{ work.tag[0] }</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })
        }
      </div>

      {/* <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      > 
        {filterWork.map((work, index) =>
          <div className="app_work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name}  />

              <motion.div
                whileHover={{ opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLInk} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLInk} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>

              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10}}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className='p-text'>{work.tags}</p>
              </div>
            </div>

          </div>
        )}
      </motion.div> */}
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'projects'
  );