import "./info.css"
import 'bootstrap/dist/css/bootstrap.css'
import {info} from "./info.js";



const Info = () => {
    return (
        <div className='info'>
            <div className='info__container _container row'>
                {info.map(info =>
                    <div key={info.id} className="info__item ">
                        <div>
                            <img className="info__img" src={info.img} alt=""/>
                        </div>
                        <div>
                            < div className="info__content__main">{info.main}</div>
                            <div className="info__content">{info.info}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Info;