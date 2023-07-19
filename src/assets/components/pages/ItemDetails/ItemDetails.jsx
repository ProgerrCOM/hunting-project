import { useParams } from "react-router-dom";
import { listAboutAnimals } from "../AboutAnimals/ListAboutAnimals/listAboutAnimals.js";

const ItemDetails = () => {
    const { itemId } = useParams();
    const item = listAboutAnimals.find((animal) => animal.id === parseInt(itemId));

    return (
        <div>
            <h2>Item Details</h2>
            {item && (
                <div>
                    <h3>{item.text}</h3>
                    <p>{item.price}</p>
                    <ul>
                        <li>{item.info1}</li>
                        <li>{item.info2}</li>
                    </ul>
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
};

export default ItemDetails;
