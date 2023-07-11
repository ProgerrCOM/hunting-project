import './navbar.css'
const Navbar = () => {
    return (
        <div className='myNavbar'>
            <div className="myNavbar__container _container">
                <ul className='myNavbar__list'>
                    <li className='myNavbar__item'>Про полювання </li>
                    <li className='myNavbar__item'>Про  лісництво </li>
                    <li className='myNavbar__item'>Про тварин </li>
                    <li className='myNavbar__item'>Про платежі  </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;