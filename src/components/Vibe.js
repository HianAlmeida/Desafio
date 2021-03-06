import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import { AiOutlineSetting, AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import VibePopup from "./VibePopup";
import { useState } from "react";
import "../styles/Vibe.css";
function Vibe() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <div className="vibe-heading">
                <Link className="vibe-btn" to="/Beneficios">
                    <IconContext.Provider value={{ size: "1.4em" }}>

                        <FaAngleLeft />

                    </IconContext.Provider>

                    <p>Benefícios</p>
                </Link>

                <div>
                    <h1>VIBE</h1>
                    <p className="vibe-subtitle">Benefícios flexíveis a sua rotina</p>
                    <img src="../img/Grupo 261.png" alt="" />
                </div>

            </div>

            <div onClick={() => setButtonPopup(true)} className="vibe-info shadow">
                <div>
                    <img src="../img/685352.png" alt="" />
                </div>

                <h2>Alimentação e refeição</h2>
                <FaAngleRight className="arrow" />
            </div>

            <div className="vibe-info shadow">
                <div>
                    <IconContext.Provider value={{ size: "1.4em" }}>

                        <AiOutlinePlus />

                    </IconContext.Provider>

                </div>

                <h2>Assistência Médica</h2>
                <FaAngleRight className="arrow" />
            </div>

            <div className="vibe-info shadow">
                <div>
                    <img src="../img/2035128.png" alt="" />
                </div>

                <h2>Assistência Odontológica</h2>
                <FaAngleRight className="arrow" />
            </div>


            <div className="settings">
                <IconContext.Provider value={{ size: "2em", color: "white" }}>

                    <AiOutlineSetting />

                </IconContext.Provider>

            </div>

            <VibePopup trigger={buttonPopup} setTrigger={setButtonPopup} />


        </div>
    )
};

export default Vibe;