import "./bestOffers.css"
import Olen from "/src/assets/img/Olen.jpg"

const BestOffers = () => {

    return (
        <div className='bestOffers'>
            <div className="bestOffers__container _contain">
                <div className='bestOffers__container-main'>
                    <div className="bestOffers__main">BEST OFFERS</div>
                    <div className="bestOffers__month">
                        of September
                    </div>
                    <div className="bestOffers__info">
                        With a variety of accountants available at our company, you can always <br/> choose one that
                        fits your
                        corporate requirements.
                    </div>
                    <div className="bestOfferd__batton">
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestOffers;