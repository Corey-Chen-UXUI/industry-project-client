import "./ToolTipModal.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalBard from "../../Components/ModalBard/ModalBard";
import close from "../../Assets/Icons/x.png";
import mic from "../../Assets/Icons/mic.svg";

const ToolTipModal = () => {
    const [openModal, setOpenModal] = useState(false);

    const [openTipModal, setOpenTipModal] = useState(false);

    const handleOpen = () => {
        const timer = setTimeout(() => {
            setOpenTipModal(true);
        }, 2000);
        return () => clearTimeout(timer);
    };
    useEffect(() => {
        handleOpen();
    }, []);

    return (
        <>
            <section className={openTipModal ? "tooltip" : "display-none"}>
                <section className="tooltip__top">
                    <h1 className="tooltip__title">Bard Education</h1> <img src={close} className="tooltip__close" />
                </section>

                <section className="tooltip__description">How does google maps know the best route? </section>
                <section className="tooltip__sub-description">Maps uses ai to pull live information from ...</section>

                <ModalBard open={openModal} onClose={() => setOpenModal(false)} />

                <button className="tooltip__button" onClick={() => setOpenModal(true)}>
                    <img className="tooltip__icon" src={mic} alt="mic-icon" />
                    Ask Bard How
                </button>
            </section>
        </>
    );
};
export default ToolTipModal;
