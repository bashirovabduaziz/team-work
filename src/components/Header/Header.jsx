import React from 'react'
import './Header.css'
import Logo from '../img/Logo.svg'
const Header = () => {
  return (
    <header className="header">
       <div className="header__container">
        <div className="header__left">
        <div className="header__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="header__list">
          <li className="header__link"><a href="#" className="header__item">Home</a></li>
          <li className="header__link"><a href="#" className="header__item">Courses</a></li>
          <li className="header__link"><a href="#" className="header__item">About Us</a></li>
          <li className="header__link"><a href="#" className="header__item">Pricing</a></li>
          <li className="header__link"><a href="#" className="header__item">Contact</a></li>
        </ul>
        </div>
        <div className="header__right">
          <button className='btn'>Sign Up</button>
          <button className='button'>Login</button>
        </div>
        
       </div>
       <div className="header__top">
          <h1 className='header__title'>About Skillbridge</h1>
          <p className='header__text'>Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
        </div>

    </header>
  )
}

export default Header