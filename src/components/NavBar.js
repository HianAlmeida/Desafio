import { Nav, NavLink, NavMenu, NavButton } from '../styles/NavStyle';
import { useLocation } from 'react-router-dom';
import SvgComponent from '../svg/icon';
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
                    Benefícios

                </NavLink>

                {/* <NavButton exact to="/Proposta">
                    P
                </NavButton> */}


            </NavMenu>

        </Nav>
    )
};

export default NavBar;