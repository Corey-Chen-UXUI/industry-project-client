import "./ModalBard.scss";
import micCircle from "../../Assets/Icons/mic_circle.svg";
import bardLogo from "../../Assets/Icons/bard-logo.png";
import bardIcon from "../../Assets/Icons/bard-icon.png";
import React, { useState } from "react";

const ModalBard = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <section className="overlay" onClick={onClose}>
                <section className="wrapper">
                    <section className="modal">
                        <img className="modal__bardlogo" src={bardLogo} />
                        <img className="modal__mic-circle" src={micCircle} />
                        <p className="modal__description">Try asking something</p>
                        <p className="modal__footer">English(Canada)</p>
                    </section>
                    <button className="button">
                        <img className="button__icon" src={bardIcon} />
                        What are the benefit of AI?
                    </button>
                    <button className="button">
                        <img className="button__icon" src={bardIcon} />
                        How does bard use my data?
                    </button>
                </section>
            </section>
        </>
    );
};

export default ModalBard;
