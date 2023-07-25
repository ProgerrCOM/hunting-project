import {useState} from 'react';
import React, {useEffect, useRef} from 'react';
import L from 'leaflet';
import './aboutFormContact.css'

const AboutFormContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map('map').setView([51.5074, -0.1278], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            }).addTo(map);

            L.marker([51.5074, -0.1278]).addTo(map)
                .bindPopup('London')
                .openPopup();

            mapRef.current = map;
        }
    }, []);

    const isValidEmail = (email) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (firstName.trim() === '') {
            alert('Please enter your first name.');
            return;
        }

        if (lastName.trim() === '') {
            alert('Please enter your last name.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidPhoneNumber(phone)) {
            alert('Please enter a valid phone number (numbers only).');
            return;
        }

        alert('Form submitted successfully!');
    };

    const handlePhoneFocus = () => {
        if (!phone) {
            setPhone('+380');
        }
    };

    const handlePhoneInput = (event) => {
        let phoneNumber = event.target.value.replace(/[^\d+]/g, '');

        if (!phoneNumber.startsWith('+')) {
            phoneNumber = '+380' + phoneNumber;
        }

        setPhone(phoneNumber);
    };

    return (
        <div className="aboutForm">
            <div className="aboutForm__container _container">
                <div className="aboutForm__contacts">
                    <div className="aboutForm__contacts_container">
                        <div className="verticalLine"></div>
                        <div className="aboutForm__container__contacts__parameters">

                            <p className="aboutForm__text"><a href="#" className="aboutForm__color">+38-097-989-47-82</a>
                            </p>
                            <p className="aboutForm__text"><a href="#" className="aboutForm__color">+38-067-411-20-59</a>
                            </p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="aboutForm__container__contacts__parameters">

                            <p className="aboutForm__text"><a href="#"
                                                              className="aboutForm__color">hunterviktor2008@gmail.com</a></p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="aboutForm__container__contacts__parameters">

                            <p className="aboutForm__text__geolocation aboutForm__text"><a href="#"
                                                                                           className="aboutForm__color">с. Сушки, Коростенський район,  Житомирська обл, Україна</a></p>
                        </div>
                        <div className="verticalLine"></div>
                    </div>
                </div>
                <div className='main-container-form__content'>
                    <div className="main-container-date">
                        <h3 className="title">Замовлення</h3>
                        <form className="form" onSubmit={handleFormSubmit}>
                            <div className="input-group">
                                <label htmlFor="first-name" className="text-input">Ім'я</label>
                                <input type="text" id="first-name" className="input-contact" value={firstName}
                                       onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="last-name" className="text-input">По батькові</label>
                                <input type="text" id="last-name" className="input-contact" value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email" className="text-input">E-mail</label>
                                <input type="email" id="email" className="input-contact" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone" className="text-input">Номер телефону</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="input-contact"
                                    value={phone}
                                    onFocus={handlePhoneFocus}
                                    onChange={handlePhoneInput}
                                    placeholder="+380"
                                />
                            </div>
                            <div className="input-group input-group-message">
                                <label htmlFor="message" className="text-input">Ваші побажання</label>
                                <textarea id="message" rows="4" className="input_message"></textarea>
                            </div>
                            <div className="button-row">
                                <button type="submit" className="button-row_1">Відправити повідомлення</button>
                                <span className="text-input">чи використати</span>
                                <a className="button-row_2" href="#" target="_blank">Повідомлення</a>
                            </div>
                        </form>
                    </div>
                    <div className='mapAboutHuntingForm'>
                        <div id="map" className="mapAboutHunting__containerForm"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFormContact;
