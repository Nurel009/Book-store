import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import contac from '../../../../assets/header/contac.png'
import facebook from '../../../../assets/header/facebook.png'
import instagram from '../../../../assets/header/instagram.png'
import ins from '../../../../assets/header/in.png'
import ptichka from '../../../../assets/header/ptichka.png'
import b from '../../../../assets/header/b.png'
import delivery from '../../../../assets/header/delivery.png';
import laik from '../../../../assets/header/laik.png';


const BurgerMenu = () => {
  const  data  = useSelector((state) => state.auth.user)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
                <Link to={'/'}><li>HOME</li></Link>
                <Link to={'/about'}><li>ABOUT US</li></Link>
                <Link to={'/books'}><li>BOOKS</li></Link>
                <Link to={'/newrelease'}><li>NEW RELEASE</li></Link>
                <Link to={'/contacts'}><li>CONTACT US</li></Link>
                <Link to={'/blog'}><li>BLOG</li></Link>
              {
                data ? data.user.name :
                <Link to={'auth/login'}>
                    <span>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z" fill="#444444" />
                        </svg>
                    </span> &nbsp;Войти
                </Link>
              }
              <Link to="/favorites">
                  <img src={delivery} alt="" /> &nbsp;Корзина
              </Link>
              <Link to="/laik">
                  <img src={laik} alt="" /> &nbsp;Избранное
              </Link>
      </ul>
    </div>
  );
};

export default BurgerMenu;