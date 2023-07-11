import 'bootstrap/dist/css/bootstrap.css'
import "./team.css"
import {teams} from "./teams.js";

import 'bootstrap/dist/css/bootstrap.css'

const Team = () => {
    return (
        <div className="team">
            <div className="team__container _container">
                <h1 className="team__main">OUR TEAM
                </h1>
                <div className="team__item row">
                    {teams.map(teams =>
                        <div key={teams.id} className="team_content col-xl-6">
                            <div className="team__img">
                                <img src={teams.img} alt=""/>
                            </div>
                            <div className='team__text'>
                                <div className="team__name"> {teams.name}</div>
                                <div className="team__work"> {teams.place}</div>
                                <div className="teem__png">
                                    <img src="" alt=""/>
                                </div>
                                <div className="team__number">{teams.nomber}</div>
                                <div className="team__info"> {teams.info}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Team;