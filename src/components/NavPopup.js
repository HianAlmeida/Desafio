import React from 'react'
import { FaTimes } from "react-icons/fa";
import "../styles/NavPopup.css";

function NavPopup(props) {
    return (props.trigger) ? (
        <div className="nav-popup btn-animation">
            <div className="nav-close">
                <FaTimes onClick={() => props.setTrigger(false)} />
            </div>

            <h1>Aceita a proposta?</h1>
            <img src="../img/215654@2x.png" alt="" />
            <p>Aceitar a proposta significa que<br />nós vamos dar continuidade ao<br />processo de contratação.</p>

            <button class="btn1">Aceito</button>
            <button class="btn2">Não Aceito</button>

            <a href="">Ainda tenho dúvidas</a>



        </div>
    ) : "";
};

export default NavPopup;