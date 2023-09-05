import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './properties.css';
import {NavLink} from "react-router-dom";
import useFirebaseData from "../../../../../hooks/useFirebaseData.js";

const Properties = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const properties = useFirebaseData('properties');

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const itemElements = document.querySelectorAll('.properties__item');

            const newVisibleItems = Array.from(itemElements).reduce((acc, itemElement) => {
                const rect = itemElement.getBoundingClientRect();
                const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
                if (isVisible) {
                    return [...acc, itemElement.id];
                }
                return acc;
            }, []);

            setVisibleItems(newVisibleItems);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="properties">
            <div className="properties__container _container">
                <h3 className='properties__title'>
                    НАЙБІЛЬШ ПОПУЛЯРНІ ВИДИ ПОЛЮВАННЯ
                </h3>
                <div className='row properties__cards'>
                    {properties.map(propertie => (
                        <NavLink to='/aboutAnimals'
                            id={`item-${propertie.id}`}
                            key={propertie.id}
                            className={`properties__item col-xl-6 col-lg-12 ${
                                visibleItems.includes(`item-${propertie.id}`) ? 'visible' : ''
                            }`}
                        >
                            <div className="properties__image">
                                <img src={propertie.img} alt=""/>
                            </div>
                            <div>
                                <div className="properties__content">
                                    <p className="properties__text">{propertie.text}</p>
                                    <ul className="post-modern-meta">
                                        <li>
                                            <a className="button-winona" href="#">
                                                <div className="content-original">{propertie.price}</div>
                                            </a>
                                        </li>
                                        <li className="properties__info">{propertie.info1}</li>
                                        <li className="properties__info">{propertie.info2}</li>
                                    </ul>
                                    <p className="properties__history">{propertie.description}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
                <div className='properties__button'>
                    <NavLink to='/aboutAnimals'>
                        <button className="properties__btn">
                            Дізнатися більше
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Properties;
