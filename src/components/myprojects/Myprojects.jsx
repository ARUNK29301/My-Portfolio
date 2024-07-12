import React from 'react'
import './myprojects.css'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG5 from '../../assets/img5.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>FingerTip</h3>
          <small className='text-light'>ReactJs | NodeJs | ExpressJs | Typescript | MySQL</small>
          <p>
            <small>Fingertip is a fintech project designed for corporate companies to facilitate financial transactions on web platform, maintain accountability, and track transaction history. Companies can input their own details, including bank, KYC and card information, as well as customer and vendor data. The platform enables payments to both customers and vendors, along with other utility payment.</small>
          </p>
          <div className="portfolio__item-cta">
            <a href="https://thefingertip.in/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Netbulk</h3>
          <small className='text-light'>ReactJs | NodeJs | ExpressJs | Typescript | MySQL</small>
          <p>
            <small>Netbulk is a web application designed to streamline the management of user's ship and port details. Users can effortlessly add and manage voyage details for both time and voyage charters, enhancing operational efficiency. Additionally, the portal empowers users to maintain their stock holdings ,monitor future values and Mark-to-Market (MTM) details with ease. With its intuitive interface and robust features, Netbulk serves as a valuable tool for maritime professionals seeking efficient vessel and cargo management.</small>
          </p>
          <div className="portfolio__item-cta">
            <a href="https://netbulk.knowledgeqonline.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Todo List</h3>
          <small className='text-light'>ReactJs | NodeJs | ExpressJs | MongoDB</small>
          <p>
            <small>Todo List is a web application designed to help users manage their daily tasks efficiently. It provides an intuitive interface for creating, updating, and deleting tasks, ensuring users can keep track of their to-dos seamlessly.</small>
          </p>
          <div className="portfolio__item-cta">
            <a href="https://todolist-mern-2.onrender.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Myprojects