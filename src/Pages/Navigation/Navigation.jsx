import "./Navigation.scss";
import ToolTipModal from "../../Components/ToolTipModal/ToolTipModal";
import NavigationLanding from "../../Components/NavigationLanding/NavigationLanding";
import ModalBard from "../../Components/ModalBard/ModalBard";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        const timer = setTimeout(() => {
            setOpenModal(true);
        }, 2000);
        return () => clearTimeout(timer);
    };
    useEffect(() => {
        handleOpen();
    }, []);

    return (
        <div className="navigation">
            <ModalBard />
            <ToolTipModal className="navigation__tooltips" />
            <NavigationLanding />

            {/* <Modal/> */}
        </div>
    );
};

export default Navigation;
