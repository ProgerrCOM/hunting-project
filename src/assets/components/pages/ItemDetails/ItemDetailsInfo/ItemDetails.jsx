import {NavLink, useParams} from "react-router-dom";
import {listAboutAnimals} from "../../AboutAnimals/ListAboutAnimals/listAboutAnimals.js";
import {birds} from "../../AboutAnimals/ListAboutAnimals/listAboutBirds.js";

import './itemDetails.css'
import Properties from "../../Home/Main/Properties/Properties.jsx";
import ItemDetailsMain from "../ItemDetailsMain.jsx/ItemDetailsMain.jsx";

const ItemDetails = () => {
    const {itemId} = useParams();
    const item =
        listAboutAnimals.find((animal) => animal.id === parseInt(itemId)) ||
        birds.find((bird) => bird.id === parseInt(itemId));

    return (
        <div>
            <div className='itemDetails'>
                <ItemDetailsMain/>
                <div className="itemDetails__container _container">
                    {item && (
                        <div className='itemDetails__info'>
                            <div className='itemDetails__image'>
                                <img className='itemDetails__img' src={item.img} alt=""/>
                            </div>
                            <div className="itemDetails__content">
                                <div className="itemDetails__text">{item.text}</div>
                                <div className="itemDetails__description">{item.description}</div>
                                <div className="itemDetails__price">{item.price}</div>
                                <div className='itemDetails__btn'>
                                    <button className="itemDetails__button"><NavLink to='/aboutForm'>Замовити</NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Properties/>
        </div>
    );
};

export default ItemDetails;
