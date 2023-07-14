
import { useState, useEffect } from 'react';
import style from './header.module.css';
import number from '/src/assets/img/number-icon.png';
import LOGO from '/src/assets/img/LOGO.jpg';
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsMobile(windowWidth <= 768);
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
                    <img className={style.header__logo_icon} src={LOGO} alt="" />
                </div>
                {!isMobile && (
                    <>
                        <div className={style.contacts__number}>
                            <div className={style.number__icon}>
                                <img className={style.number__img} src={number} alt="" />
                            </div>
                            <div className={style.number__content}>
                                <a className={style.content__number} href="#">
                                    1-800-1234-567
                                </a>
                                <br />
                                <a className={style.content__number} href="#">
                                    1-800-8763-765
                                </a>
                            </div>
                        </div>
                        <div className={style.contacts__number}>
                            <div className={style.number__icon}>
                                <img className={style.number__img} src={number} alt="" />
                            </div>
                            <div className={style.number__content}>
                                <a className={style.content__number} href="#">
                                    2130 Fulton Street
                                </a>
                                <br />
                                <a className={style.content__number} href="#">
                                    San Diego, CA 94117-1080
                                </a>
                            </div>
                        </div>
                        <div className={style.header__btn}>
                            <button className={style.header__button} onClick={toggleBurgerMenu}>
                                Request a call
                            </button>
                        </div>
                    </>
                )}
                {isMobile && (
                    <div className={style.burger__button}>
                        <button className={style.burger__btn} onClick={toggleBurgerMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                )}
            </div>
            {showBurgerMenu && <BurgerMenu closeBurgerMenu={closeBurgerMenu} />}
        </div>
    );
};

export default Header;
