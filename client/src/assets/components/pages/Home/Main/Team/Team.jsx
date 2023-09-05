import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './team.css';
import useFirebaseData from "../../../../../hooks/useFirebaseData.js";


const Team = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const teams = useFirebaseData('team');

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const itemElements = document.querySelectorAll('.team_content');

            const newVisibleItems = Array.from(itemElements).reduce((acc, itemElement) => {
                const rect = itemElement.getBoundingClientRect();
                const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
                if (isVisible) {
                    return [...acc, itemElement.id];
                }
                return acc;
            }, []);

            setVisibleItems(newVisibleItems);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="team">
            <div className="team__container _container">
                <h1 className="team__main">КОМАНДА</h1>
                <div className="team__item row">
                    {teams.map(team => (
                        <div
                            id={`team-${team.id}`}
                            key={team.id}
                            className={`team_content col-xl-6 ${visibleItems.includes(`team-${team.id}`) ? 'visible' : ''}`}
                        >
                            <div className="team__img">
                                <img src={team.img} alt="" />
                            </div>
                            <div className='team__text'>
                                <div className="team__name">{team.name}</div>
                                <div className="team__work">{team.place}</div>
                                <hr className={"lineHr"}/>
                                <div className="team__info">{team.info}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
