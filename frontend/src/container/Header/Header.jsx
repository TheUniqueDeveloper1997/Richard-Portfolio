import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'
import './Header.scss'
const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className="app__header app__flex">
      <motion.div whileInView={{x:[-100,0],opacity:[0,1]}} transition={{duration:0.5}} className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🖐️</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, My name is</p>
              <h1 className="head-text">Richard</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <h1 className="head-text">About me</h1>
            <p className="p-text">I'm a sales professional with big dreams to become a 
            talented software engineer. I love applying responsive design principles and 
            watching my web pages shrink into mobile screens and still look amazing. 
            It's oddly satisfying. <br/><br/>
            My specialties include quickly learning new skills and programming languages, 
            problem solving, domain driven design, responsive design principles, website 
            optimization, and the Model View View Model (MVVM) and Model View Controller (MVC) 
            methods of organizing code. So far I have Javscript,Kotlin, Sanity, JavaScript, 
            TypeScript, CSS, Redux, React, HTML, Node, MongoDB, and Git/GitHub under my belt. 
            I'm still enthusiastically grabbing onto any other programming languages, 
            frameworks, or principles I can integrate into the coding web in my head.</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5, delayChildren:0.5}} className="app__header-img">
        <img src={images.profilepic} alt="profile_bg"/>
        <motion.img whileInView={{scale:[0,1]}} transition={{duration:1, ease:'easeInOut'}} src={images.circle} className="overlay_circle"/>
      </motion.div>
      <motion.div variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.flutter,images.redux,images.sass].map((circle, index)=>(
          <div className='circle-cmp app__flex' key={`circe-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>

    </div>
  )
}
export default AppWrap(Header, 'home')