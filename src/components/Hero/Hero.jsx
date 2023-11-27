import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="container">
    <div className="hero">
      <div className="hero-top">
        <h2 className='hero-title'>Achievements</h2>
        <p className='hero-subtitle'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
      </div>
      <div className="hero-cards">
        <div className="card-hero">
        <div className="hero-card">
          <img src="./images/cardIcon1.svg" alt="cardIcon" />
          <h6 className='card-title'>Trusted by Thousands</h6>
          <p className='card-subtitle'>We have successfully served thousands of students,  <br /> potential and achieve their career goals.</p>
        </div>
        <div className="hero-card">
          <img src="./images/cardIcon1.svg" alt="cardIcon" />
          <h6 className='card-title'>Award-Winning Courses</h6>
          <p className='card-subtitle'>We have successfully served thousands of students,  <br /> potential and achieve their career goals.</p>
        </div>
        </div>
        <div className="card-hero">
        <div className="hero-card">
          <img src="./images/cardIcon1.svg" alt="cardIcon" />
          <h6 className='card-title'>Positive Student Feedback</h6>
          <p className='card-subtitle'>We have successfully served thousands of students,  <br /> potential and achieve their career goals.</p>
        </div>
        <div className="hero-card">
          <img src="./images/cardIcon1.svg" alt="cardIcon" />
          <h6 className='card-title'>Industry Partnerships</h6>
          <p className='card-subtitle'>We have successfully served thousands of students,  <br /> potential and achieve their career goals.</p>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Hero