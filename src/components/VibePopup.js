import React from 'react'
import { FaTimes } from "react-icons/fa";
import "../styles/VibePopup.css";

function VibePopup(props) {
    return (props.trigger) ? (
        <div className="vibe-popup">
            <div className="vibe-items">
                <div className="vibe-info">
                    <div>
                        <img src="../img/685352.png" alt="" />
                    </div>
                    <h2>Alimentação e refeição</h2>

                    <FaTimes onClick={() => props.setTrigger(false)} className="arrow" />

                </div>

                <img className="popup-img" src="../img/vibe-img.jpeg" alt="" />
                <p>Você pode distribuir o valor total do<br />benefício entre os cartôes de Vale<br />Alimentação e Refeição ou usar um<br />único cartão.</p>



            </div>

        </div>
    ) : "";
}

export default VibePopup;
