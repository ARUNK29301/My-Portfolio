import React from 'react'
import './about.css'
import { GiGraduateCap } from 'react-icons/gi'
import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>BCA <br /><i>Periyar university</i></small>
            </article>

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>Current GPA</h5>
              <small>7.0</small>
            </article>

            <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  {/* <li>Net Centric</li> */}
                  <li>Web Applications</li>
                </ul>
              </small>
            </article>



          </div>
          <p>
            Experienced <b>Full Stack Developer</b> with a strong focus on creating engaging user interfaces and quickly adapting to new technologies. Proficient in multiple programming languages and frameworks, specializing in developing scalable and efficient applications.
          </p>
          {/* <p>
            I'm a <b>Software Engineering Undergradute</b> at the University of Kelaniya.
            I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply
            and expand my technical skills.
            With a strong academic foundation in software engineering and hands-on experience in various programming languages,
            I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.

          </p> */}

        </div>
      </div>
    </section>
  )
}

export default About