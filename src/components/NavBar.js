import { Nav, NavLink, NavMenu } from '../styles/NavStyle';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import SvgComponent from '../svg/icon';
import Heart from '../svg/heart';
import "../styles/Button.css";
import NavPopup from './NavPopup';
function NavBar() {
    const location = useLocation();
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavLink exact to="/" >


                        <SvgComponent color={location.pathname === "/" ? ".b{fill:#650D99}" : ".b{fill:#FFFFFF}"} />
                    </NavLink>

                    <NavLink exact to="/Beneficios" >
                        <Heart color={location.pathname === "/Beneficios" ? "#650D99" : "#fff"} />

                    </NavLink>

                </NavMenu>
                <div onClick={() => setButtonPopup(true)} className="circle">
                    <img src="./img/215654.png" alt="" />

                </div>

                {location.pathname === "/" ? <div>
                    <div className="balloon">
                        <h1>Gostou da proposta?</h1>
                        <p>Responda se aceita fazer<br />parte do nosso time.</p>
                    </div>
                    <div className="balloon-bottom">
                    </div>
                </div> : ""}
            </Nav>
            <NavPopup trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
    )
};

export default NavBar;