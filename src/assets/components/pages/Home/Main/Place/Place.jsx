import "./place.css"
import  {place} from "./place.js";


const Place = () => {
    return (
        <div className="place">
            <div className="place__container _container">
                <div className='place__title'>
                    <div className="place__header">RESIDENTIAL PROPERTY CATEGORIES</div>
                    <div className="place__content">At our agency, we work with various types of residential real estate
                        property. You can find <br/> out more about our properties by browsing our website.
                    </div>
                </div>

                <div className="place__container__picture_main ">
                    {place.map (place =>
                    <div key={place.id} className="place__conteiner__picture">
                        <div className="place__container__img">
                            <img src={place.img} alt=""/>
                        </div>
                        <div className="palce__container__content"> {place.container}</div>
                    </div>
                    )}
                </div>
                <div className='place__btn'>
                    <button className='palce__button'> Hello world</button>
                </div>
            </div>

        </div>
    );
};

export default Place;