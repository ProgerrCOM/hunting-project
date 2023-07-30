import {useState, useEffect} from 'react';
import style from './header.module.css';
import number from '/src/assets/img/number-icon.png';
import LOGO from '/src/assets/img/LOGO.jpg';
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsMobile(windowWidth <= 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <img className={style.header__logo_icon} src={LOGO} alt=""/>
                </div>
                {!isMobile && (
                    <>
                        <div className={style.contacts__number}>
                            <div className={style.number__icon}>
                                <img className={style.number__img} src={number} alt=""/>
                            </div>
                            <div className={style.number__content}>
                                <a className={style.content__number} href="tel:+380979894782">
                                    +38-097-989-47-82
                                </a>
                                <br/>
                                <a className={style.content__number} href="tel:+380674112059">
                                    +38-067-411-20-59
                                </a>
                            </div>
                        </div>
                        <div className={style.contacts__number}>
                            <div className={style.number__icon}>
                                <img className={style.number__img} src={number} alt=""/>
                            </div>
                            <div className={style.number__content}>
                                <a className={style.content__number} target="_blank" href="https://goo.gl/maps/EP7XM68wsKCNeY1X9">
                                    с. Сушки, Коростенський район
                                </a>
                                <br/>
                                <a className={style.content__number} target="_blank" href="https://goo.gl/maps/EP7XM68wsKCNeY1X9">
                                    Житомирська обл, Україна
                                </a>
                            </div>
                        </div>
                    </>
                )}
                <div className={style.header__btn}>
                    <button className={style.header__button}>
                        <NavLink to='/aboutForm'>Замовити полювання</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
