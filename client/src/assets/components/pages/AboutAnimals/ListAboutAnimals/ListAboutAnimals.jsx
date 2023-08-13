import './listAboutAnimals.css'

import 'bootstrap/dist/css/bootstrap.css';
import '../../Home/Main/Properties/properties.css';
import {useEffect, useState} from "react";
import {listAboutAnimalsArr} from "./listAboutAnimalsArr.jsx";
import {NavLink} from "react-router-dom";
import {birds} from "./listAboutBirdsArr.jsx";

const ListAboutAnimals = () => {
    const [visibleItems, setVisibleItems] = useState([]);

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
        <div className="properties animalsProperties">
            <div className="properties__container _container">
                <div className='row properties__cards'>
                    <div className='titleList'>
                        <p>Полювання на тварин</p>
                    </div>
                    {listAboutAnimalsArr.map(listAboutAnimal => (
                        <NavLink to={`/item/${listAboutAnimal.id}`}
                                id={`item-${listAboutAnimal.id}`}
                                key={listAboutAnimal.id}
                                className={`properties__item col-xl-6 col-lg-12 ${
                                    visibleItems.includes(`item-${listAboutAnimal.id}`) ? 'visible' : ''
                                }`}
                            >
                                <div className="properties__image">
                                    <img src={listAboutAnimal.img} alt=""/>
                                </div>
                                <div>
                                    <div className="properties__content">
                                        <p className="properties__text">{listAboutAnimal.text}</p>
                                        <ul className="post-modern-meta">
                                            <li>
                                                <a className="button-winona" href="#">
                                                    <div className="content-original">{listAboutAnimal.price}</div>
                                                </a>
                                            </li>
                                            <li className="properties__info">{listAboutAnimal.info1}</li>
                                            <li className="properties__info">{listAboutAnimal.info2}</li>
                                        </ul>
                                        <p className="properties__history">{listAboutAnimal.description}</p>
                                    </div>
                                </div>
                        </NavLink>
                    ))}
                    <div className='titleList'>
                        <p>Полювання на птахів</p>
                    </div>
                    {birds.map(bird => (
                    <NavLink to={`/item/${bird.id}`}
                             id={`item-${bird.id}`}
                             key={bird.id}
                             className={`properties__item col-xl-6 col-lg-12 ${
                                 visibleItems.includes(`item-${bird.id}`) ? 'visible' : ''
                             }`}
                    >
                        <div className="properties__image">
                            <img src={bird.img} alt=""/>
                        </div>
                        <div>
                            <div className="properties__content">
                                <p className="properties__text">{bird.text}</p>
                                <ul className="post-modern-meta">
                                    <li>
                                        <a className="button-winona" href="#">
                                            <div className="content-original">{bird.price}</div>
                                        </a>
                                    </li>
                                    <li className="properties__info">{bird.info1}</li>
                                    <li className="properties__info">{bird.info2}</li>
                                </ul>
                                <p className="properties__history">{bird.description}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
                </div>
            </div>
        </div>
    );
};

export default ListAboutAnimals;