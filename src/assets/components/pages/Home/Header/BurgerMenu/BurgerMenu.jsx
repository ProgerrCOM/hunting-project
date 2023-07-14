import { useEffect, useRef } from 'react';
import './burgerMenu.css';

const BurgerMenu = ({ closeBurgerMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeBurgerMenu();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closeBurgerMenu]);

    return (
        <div className="burgerMenu" ref={menuRef}>
            <div className="burgerMenu__close">
                <button onClick={closeBurgerMenu} className="close__button">
                    <span className="close1"></span>
                    <span className="close2"></span>
                </button>
            </div>
            <div className="burgerMenu__container">
                <div className="burgerMenu__numbers">
                    <a href="tel:1-800-1234-567">1-800-1234-567</a>
                    <a href="tel:1-800-8763-765">1-800-8763-765</a>
                </div>
                <div className="burgerMenu__address">
                    <a href="#">2130 Fulton Street</a>
                    <a href="#">San Diego, CA 94117-1080</a>
                </div>
                <div className="burgerMenu__button">
                    <button className="burgerMenu__btn">Request a call</button>
                </div>
            </div>
        </div>
    );
};


export default BurgerMenu;
