import { Nav, NavLink, NavMenu, NavButton } from '../styles/NavStyle';
import { useLocation } from 'react-router-dom';
import SvgComponent from '../svg/icon';
import Heart from '../svg/heart';
import "../styles/Button.css";
function NavBar() {
    const location = useLocation();

    return (
        <Nav>
            <NavMenu>
                <NavLink exact to="/" >

                    {/* <img src={location.pathname === "/" ? "./img/768049.png" : "./img/Grupo 20.png"} alt="" /> */}
                    <SvgComponent color={location.pathname === "/" ? ".b{fill:#650D99}" : ".b{fill:#FFFFFF}"} />
                </NavLink>

                <NavLink exact to="/Beneficios" >
                    <Heart color={location.pathname === "/Beneficios" ? "#650D99" : "#fff"} />

                </NavLink>

            </NavMenu>
            <div className="circle">
                <img src="./img/215654.png" alt="" />
            </div>

            {location.pathname === "/" ? <div>
                <div class="balloon">
                    <h1>Gostou da proposta?</h1>
                    <p>Responda se aceita fazer<br />parte do nosso time.</p>
                </div>
                <div class="balloon-bottom">
                </div>
            </div> : ""}


        </Nav>
    )
};

export default NavBar;