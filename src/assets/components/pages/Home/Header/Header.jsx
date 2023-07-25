import {useState, useEffect} from 'react';
import style from './header.module.css';
import number from '/src/assets/img/number-icon.png';
import LOGO from '/src/assets/img/LOGO.jpg';
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsMobile(windowWidth <= 992);
            setShowBurgerMenu(false);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleBurgerMenu = () => {
        setShowBurgerMenu((prevShowBurgerMenu) => !prevShowBurgerMenu);
    };

    const closeBurgerMenu = () => {
        setShowBurgerMenu(false);
    };

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
                                <a className={style.content__number} href="#">
                                    +38-097-989-47-82
                                </a>
                                <br/>
                                <a className={style.content__number} href="#">
                                    +38-067-411-20-59
                                </a>
                            </div>
                        </div>
                        <div className={style.contacts__number}>
                            <div className={style.number__icon}>
                                <img className={style.number__img} src={number} alt=""/>
                            </div>
                            <div className={style.number__content}>
                                <a className={style.content__number} href="#">
                                    с. Сушки, Коростенський район
                                </a>
                                <br/>
                                <a className={style.content__number} href="#">
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
