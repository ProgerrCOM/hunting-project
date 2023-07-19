// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

import './mainSlider.css'
import {NavLink} from "react-router-dom";

export default function MainSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider">
                        <div className='slider__main-container'>
                            <div className="slider__container _container">
                                <div className='slider__content'>
                                    <div className="slider__subtitle">МИСЛИВСЬКЕ ГОСПОДАРСТВО</div>
                                    <div className="slider__title">"СУШКИ"</div>
                                    <div className="slider__text">Полювання – це справжня пригода, що дозволяє
                                        зблизитися з природою, випробувати адреналін та насолодитися історичними
                                        традиціями. Відчуйте свободу та захоплюючість, вирушивши у пошуках емоцій в
                                        дикій місцевості.
                                    </div>
                                    <div>
                                        <NavLink to='/aboutHunting'>
                                            <button className="slider__btn">Дізнатися більше</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider1">
                        <div className="slider__main-container">
                            <div className="slider__container _container">
                                <div className="slider__content">
                                    <div className="slider__subtitle">Полювання</div>
                                    <div className="slider__title">Отримайте незабутні враження</div>
                                    <div className="slider__text">Приєднуйтесь до наших полювань, щоб відчути
                                        задоволення від зароблених трофеїв. Зустрічайте виклики дикої природи,
                                        взаємодійте з тваринами в їх природному середовищі і відчуйте незабутні емоції.
                                    </div>
                                    <div className="slider_button">
                                        <NavLink to='/aboutHunting'>
                                            <button className="slider__btn">Дізнатися більше</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider2">
                        <div className="slider__main-container">
                            <div className="slider__container _container">
                                <div className="slider__content">
                                    <div className="slider__subtitle">Охотницька експедиція</div>
                                    <div className="slider__title">Відправляйтеся у подорож з нами</div>
                                    <div className="slider__text">Охотницька експедиція - це можливість дослідити різні
                                        куточки землі та насолодитися унікальним досвідом. Ми пропонуємо організовані
                                        поїздки для мисливців будь-якого рівня підготовки. Зануртесь у світ полювання,
                                        дізнайтесь нові культури і створіть незабутні спогади разом з нашою експедицією.
                                    </div>
                                    <div>
                                        <NavLink to='/aboutHunting'>
                                            <button className="slider__btn">Дізнатися більше</button>
                                        </NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
