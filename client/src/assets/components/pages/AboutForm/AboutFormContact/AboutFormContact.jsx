import { useState } from 'react';
import emailjs from 'emailjs-com';
import './aboutFormContact.css';
import Map from "../../Map/Map.jsx";

const AboutFormContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const [isMessageInputFocused, setMessageInputFocused] = useState(false);

    const handleFocusMessageInput = () => {
        setMessageInputFocused(true);
    };

    const handleBlurMessageInput = () => {
        setMessageInputFocused(false);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^\+380\d{9}$/;
        return phoneRegex.test(phone);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (firstName.trim() === '') {
            errors.firstName = 'Будь ласка, напишіть ваше ім`я.';
        }

        if (lastName.trim() === '') {
            errors.lastName = 'Будь ласка, напишіть ваше прізвище.';
        }

        if (!isValidEmail(email)) {
            errors.email = 'Будь ласка напишіть ваш Email.';
        }

        if (!isValidPhoneNumber(phone)) {
            errors.phone = 'Будь ласка напишіть ваш номер телефону';
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            emailjs.send('service_7mdjar77', 'template_5dwcmbm', {
                from_name: firstName,
                last_name: lastName,
                email,
                phone,
            }, 'bReY04ACp-ibmkKBL')
                .then((response) => {
                    alert('Form submitted successfully!');
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                    alert('Error submitting form. Please try again later.');
                });
        }
    };

    const handlePhoneFocus = () => {
        if (!phone) {
            setPhone('+380');
        }
    };

    const handlePhoneInput = (event) => {
        let phoneNumber = event.target.value.replace(/[^\d]/g, '');

        if (phoneNumber.startsWith('380')) {
            phoneNumber = '+380' + phoneNumber.slice(3);
        } else if (!phoneNumber.startsWith('+380')) {
            phoneNumber = '+380' + phoneNumber;
        }

        phoneNumber = phoneNumber.slice(0, 13);

        setPhone(phoneNumber);
    };

    return (
        <div className="aboutForm">
            <div className="aboutForm__container _container">
                <div className="aboutForm__contacts">
                    <div className="aboutForm__contacts_container">
                        <div className="verticalLine"></div>
                        <div className="aboutForm__container__contacts__parameters">
                            <p className="aboutForm__text"><a href="tel:+380979894782" className="aboutForm__color">+38-097-989-47-82</a></p>
                            <p className="aboutForm__text"><a href="tel:+380674112059" className="aboutForm__color">+38-067-411-20-59</a></p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="aboutForm__container__contacts__parameters">
                            <p className="aboutForm__text"><a target='_blank' href="https://www.google.com/intl/uk/gmail/about/" className="aboutForm__color">hunterviktor2008@gmail.com</a></p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="aboutForm__container__contacts__parameters">
                            <p className="aboutForm__text__geolocation aboutForm__text"><a target='_blank' href="https://goo.gl/maps/3SjQdjLDuGMQzRPw8" className="aboutForm__color">с. Сушки, Коростенський район,  Житомирська обл, Україна</a></p>
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
                                <input type="text" id="first-name" className="input-contact" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                {formErrors.firstName && <p className="error-message">{formErrors.firstName}</p>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="last-name" className="text-input">По батькові</label>
                                <input type="text" id="last-name" className="input-contact" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                {formErrors.lastName && <p className="error-message">{formErrors.lastName}</p>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="email" className="text-input">E-mail</label>
                                <input type="email" id="email" className="input-contact" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
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
                                {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                            </div>
                            <div className="input-group input-group-message">
                                <label htmlFor="message" className="text-input">Ваші побажання</label>
                                <textarea
                                    placeholder={isMessageInputFocused ? '' : 'Напишіть текст...'}
                                    id="message"
                                    rows="4"
                                    className="input_message"
                                    onFocus={handleFocusMessageInput}
                                    onBlur={handleBlurMessageInput}
                                ></textarea>
                            </div>
                            <div className="button-row">
                                <button type="submit" className="button-row_1">Відправити повідомлення</button>
                            </div>
                        </form>
                    </div>
                    <div className='mapAboutHuntingForm'>
                        <Map/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFormContact;