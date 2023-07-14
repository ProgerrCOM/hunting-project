import "./place.css"
import  {place} from "./place.js";



const Place = () => {
    return (
        <div className="place">
            <div className="place__container _container">
                <div className='place__title'>
                    <div className="place__header">ПОЛЮВАННЯ НА ПЕРНАТУ ДИЧИНУ</div>
                    <div className="place__content">Спробуйте себе в полюванні на водно-болотну дичину
                         <br/> (качка, лиска), польову (вальдшнеп, деркач, бекас, голуб) відстрільна карта на день полювання
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
            <span className='line'></span>
        </div>
    );
};

export default Place;