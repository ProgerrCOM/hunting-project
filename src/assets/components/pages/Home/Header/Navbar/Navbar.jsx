import './navbar.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className='myNavbar'>
            <div className="myNavbar__container _container">
                <ul className=' myNavbar__links'>
                    <li className="myNavbar__links__item">OXP</li>
                    <li className="myNavbar__links__item">OXP</li>
                    <li className="myNavbar__links__item">OXP</li>
                </ul>
                <ul className='myNavbar__list'>
                    <li className='myNavbar__item'><NavLink to='/'>Головна</NavLink></li>
                    <li className='myNavbar__item'><NavLink to='/aboutHunting'>Про нас</NavLink></li>
                    <li className='myNavbar__item'><NavLink to='/aboutAnimals'>Про тварин</NavLink> </li>
                    <li className='myNavbar__item'><NavLink to='/aboutForm'>Про платежі </NavLink> </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;