import React, {useState, useEffect, useRef} from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';
import facebook from '../../../../../img/facebook.svg';
import twitter from '../../../../../img/Twitter.svg';
import UPG from '../../../../../img/UPG.webp';
import Weather from "../Weather/Weather.jsx";

const Navbar = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const burgerRef = useRef(null);

    const handleBurgerMenuToggle = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (burgerRef.current && !burgerRef.current.contains(event.target)) {
                setShowBurgerMenu(false);
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleLinkClick = () => {
        setShowBurgerMenu(false);
    };

    return (
        <div className={`myNavbar ${showBurgerMenu ? 'active' : ''}`} ref={burgerRef}>
            <div className="myNavbar__container _container">
                <ul className="myNavbar__links">
                    <li className="myNavbar__links__item">
                        <a href="#">
                            <img src={facebook} alt=""/>
                        </a>
                    </li>
                    <li className="myNavbar__links__item">
                        <img src={twitter} alt=""/>
                    </li>
                    <li className="myNavbar__links__item">
                        <img src={UPG} alt=""/>
                    </li>
                </ul>
                <Weather/>
                <ul className={`myNavbar__list ${showBurgerMenu ? 'active' : ''}`}>
                    <li className="myNavbar__item">
                        <NavLink to="/" onClick={handleLinkClick}>Головна</NavLink>
                    </li>
                    <li className="myNavbar__item">
                        <NavLink to="/aboutHunting" onClick={handleLinkClick}>Про нас</NavLink>
                    </li>
                    <li className="myNavbar__item">
                        <NavLink to="/aboutAnimals" onClick={handleLinkClick}>Про тварин</NavLink>
                    </li>
                    <li className="myNavbar__item">
                        <NavLink to="/aboutForm" onClick={handleLinkClick}>Про платежі</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin">admin</NavLink>
                    </li>
                </ul>
                <button className="burger-button" onClick={handleBurgerMenuToggle}>
                    <div className={`bar ${showBurgerMenu ? 'active' : ''}`}/>
                    <div className={`bar ${showBurgerMenu ? 'active' : ''}`}/>
                    <div className={`bar ${showBurgerMenu ? 'active' : ''}`}/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
