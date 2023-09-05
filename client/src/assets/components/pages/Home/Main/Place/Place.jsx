import React, {useEffect, useState} from 'react';
import './place.css';
import {NavLink} from "react-router-dom";
import useFirebaseData from "../../../../../hooks/useFirebaseData.js";

const Place = () => {
    const [visiblePictures, setVisiblePictures] = useState([]);
    const place = useFirebaseData('place');


    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const pictureElements = document.querySelectorAll('.place__conteiner__picture');

            const newVisiblePictures = Array.from(pictureElements).reduce((acc, pictureElement) => {
                const rect = pictureElement.getBoundingClientRect();
                const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
                if (isVisible) {
                    return [...acc, pictureElement.id];
                }
                return acc;
            }, []);

            setVisiblePictures(newVisiblePictures);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="place">
            <div className="place__container _container">
                <div className='place__title'>
                    <div className="place__header">ПОЛЮВАННЯ НА ПЕРНАТУ ДИЧИНУ</div>
                    <div className="place__content">Спробуйте себе в полюванні на водно-болотну дичину
                        <br/> (качка, лиска), польову (вальдшнеп, деркач, бекас, голуб) відстрільна карта на день
                        полювання
                    </div>
                </div>

                <div className="place__container__picture_main ">
                    {place.map(place => (
                        <NavLink
                            to='/aboutAnimals'
                            id={`picture-${place.id}`}
                            key={place.id}
                            className={`place__conteiner__picture ${
                                visiblePictures.includes(`picture-${place.id}`) ? 'visible' : ''
                            }`}
                        >
                            <div className="place__container__img">
                                <img src={place.img} alt=""/>
                            </div>
                            <div className="palce__container__content">{place.container}</div>
                        </NavLink>
                    ))}
                </div>
                <div className='place__btn'>
                    <NavLink to='/aboutAnimals'>
                        <button className='palce__button'> Дізнатися більше</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Place;
