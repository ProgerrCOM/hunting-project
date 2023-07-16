import React, { useEffect, useState } from 'react';
import './cardsAboutHunting.css';
import 'bootstrap/dist/css/bootstrap.css';
import { cardsAboutHuntings } from "./cardsAboutHunting.js";

const CardsAboutHunting = () => {
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const cardElements = document.querySelectorAll('.cardsAboutHunting__item');

            const newVisibleCards = Array.from(cardElements).reduce((acc, cardElement) => {
                const rect = cardElement.getBoundingClientRect();
                const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
                if (isVisible) {
                    return [...acc, cardElement.id];
                }
                return acc;
            }, []);

            setVisibleCards(newVisibleCards);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='cardsAboutHunting'>
            <div className="cardsAboutHunting__container _container">
                {cardsAboutHuntings.map((cardsAboutHunting, index) => (
                    <div
                        id={`card-${index}`}
                        key={cardsAboutHunting.id}
                        className={`cardsAboutHunting__item row ${index % 2 === 1 ? 'reverse' : ''} ${
                            visibleCards.includes(`card-${index}`) ? 'visible' : ''
                        }`}
                    >
                        <div className="cardsAboutHunting__card col-lg-6">
                            <div className="cardsAboutHunting__title">{cardsAboutHunting.title}</div>
                            <div className="cardsAboutHunting__text">{cardsAboutHunting.text}</div>
                        </div>
                        <div className="cardsAboutHunting__image col-lg-6">
                            <img className='cardsAboutHunting__img' src={cardsAboutHunting.img} alt="" />
                        </div>
                    </div>
                ))}
                <div className="cardsAboutHunting__conclusion">
                    <div className='conclusion__text'>
                        Запрошуємо вас відвідати наше мисливське господарство "Сушки" і насолодитися витонченим досвідом
                        полювання в унікальних та захоплюючих ландшафтах Полісся. Наша команда зробить все можливе, щоб
                        ваше перебування було незабутнім та повним пригод.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsAboutHunting;
