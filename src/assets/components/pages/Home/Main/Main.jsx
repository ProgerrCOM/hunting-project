import Properties from "./Properties/Properties.jsx";
import MainSlider from "./MainSlider/MainSlider.jsx";
import Indorm from "./Inform/Info.jsx"
import Place from "./Place/Place.jsx"
import Team from "./Team/Team.jsx";
import BestOffers from "./BestOffers/BestOffers.jsx";

const Main = () => {
    return (
        <div>
            <MainSlider/>
            <Properties/>
            <Indorm/>
            <Place/>
            <Team/>
             <BestOffers/>
        </div>
    );
};

export default Main;