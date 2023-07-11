import 'bootstrap/dist/css/bootstrap.css'
import './properties.css'
import {properties} from "./properties.js";


const Properties = () => {
    return (
        <div className="properties">
            <div className="properties__container _container">
                <h3 className='properties__title'>
                    НАЙБІЛЬШ ПОПУЛЯРНІ ВИДИ ПОЛЮВАННЯ
                </h3>
                <div className='row'>
                    {properties.map(propertie =>
                        <div key={propertie.id} className="properties__item col-xl-6 col-lg-12">
                            <div className="properties__image">
                                <img src={propertie.img} alt=""/>
                            </div>
                            <div>
                                <div className="properties__content">
                                    <p className="properties__text">{propertie.text}</p>
                                    <ul className="post-modern-meta">
                                        <li><a className="button-winona" href="#">
                                            <div className="content-original">{propertie.price}</div>
                                        </a></li>
                                        <li>{propertie.info1}</li>
                                        <li>{propertie.info2}</li>
                                    </ul>
                                    <p className="properties__history">{propertie.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Properties;