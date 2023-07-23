// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import facebook from '../../../../../img/facebook.svg';
import twitter from '../../../../../img/Twitter.svg';
import UPG from '../../../../../img/UPG.webp';

const Navbar = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const handleBurgerMenuToggle = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };

    return (
        <div className={`myNavbar ${showBurgerMenu ? 'active' : ''}`}>
            <div className="myNavbar__container _container">
                <ul className="myNavbar__links">
                    <li className="myNavbar__links__item">
                        <img src={facebook} alt="" />
                    </li>
                    <li className="myNavbar__links__item">
                        <img src={twitter} alt="" />
                    </li>
                    <li className="myNavbar__links__item">
                        <img src={UPG} alt="" />
                    </li>
                </ul>
                <ul className={`myNavbar__list ${showBurgerMenu ? 'active' : ''}`}>
                    <li className="myNavbar__item">
                        <NavLink to="/">Головна</NavLink>
                    </li>
                    <li className="myNavbar__item">
                        <NavLink to="/aboutHunting">Про нас</NavLink>
                    </li>
                    <li className="myNavbar__item">
                        <NavLink to="/aboutAnimals">Про тварин</NavLink>
                    </li>
                    <li className="myNavbar__item">
                        <NavLink to="/aboutForm">Про платежі</NavLink>
                    </li>
                </ul>
                <button className="burger-button" onClick={handleBurgerMenuToggle}>
                    <div className={`bar ${showBurgerMenu ? 'active' : ''}`} />
                    <div className={`bar ${showBurgerMenu ? 'active' : ''}`} />
                    <div className={`bar ${showBurgerMenu ? 'active' : ''}`} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
