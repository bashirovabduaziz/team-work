import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className="container">
    <h1 className='main-h1'>Our Goals</h1>
    <p className='main-p'>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. <br />
      Through our carefully crafted courses, we aim to</p>
    <div className='main-cards'>
        <div className='d-flex card'>
        <div className='main-card'>
          <img src="./images/Icon1.svg" alt="" width={66} height={66}/>
          <h3 className='main-tex'>Provide Practical Skills</h3>
          <p className='main-tex2'>We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
        </div>
        <div className='main-card'>
          <img src="./images/Icon2.svg" alt="" width={66} height={66}/>
          <h3 className='main-tex'>Foster Creative Problem-Solving</h3>
          <p className='main-tex2'>We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.</p>
        </div>
        </div>
      <div className='d-flex card'>
        <div className='main-card'>
          <img src="./images/Icon3.svg" alt="" width={66} height={66}/>
          <h3 className='main-tex'>Promote Collaboration and Community</h3>
          <p className='main-tex2'>We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
        </div>
        <div className='main-card'>
          <img src="./images/Icon4.svg" alt="" width={66} height={66}/>
          <h3 className='main-tex'>Stay Ahead of the Curve</h3>
          <p className='main-tex2'>The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
        </div>
      </div>

    </div>
  </div>

  )
}

export default Main