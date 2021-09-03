import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa"
import NavBar from "./NavBar";
import '../styles/Beneficios.css';

function Beneficios() {

    return (
        <div>
            <div className="ben-heading">
                <h1>Benefícios</h1>
                <p>Vantagens que oferecemos</p>
            </div>


            <Link className="ben-link fadeInRight" to="/Beneficios/Vibe">
                <div className="border"></div>
                <div className="ben-img">
                    <img src="./img/Grupo 578.png" alt="" />
                </div>

                <div className="ben-text">
                    <h2>Benefícios VIBE</h2>
                    <p>100% visualizado</p>
                </div>

                <FaAngleRight className="arrow" />
            </Link>


            <div className="ben-link fadeInRight">
                <div className="border"></div>
                <div className="ben-img">
                    <img src="./img/Grupo 580.png" alt="" />
                </div>

                <div className="ben-text">
                    <h2>Nossos Diferenciais</h2>
                    <p>80% visualizado</p>
                </div>

                <FaAngleRight className="arrow" />
            </div>
            <div className="ben-link fadeInRight">
                <div className="border"></div>
                <div className="ben-img">
                    <img src="./img/Grupo 592.png" alt="" />
                </div>

                <div className="ben-text">
                    <h2>+ Benefícios</h2>
                    <p>100% visualizado</p>
                </div>

                <FaAngleRight className="arrow" />
            </div>
            <NavBar />
        </div>
    )
}

export default Beneficios;