import "./Navigation.scss";
import ToolTipModal from "../../Components/ToolTipModal/ToolTipModal";
import NavigationLanding from "../../Components/NavigationLanding/NavigationLanding";
import ModalBard from "../../Components/ModalBard/ModalBard";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ModalBard />
            <ToolTipModal />
            <NavigationLanding />

            {/* <Modal/> */}
        </div>
    );
};

export default Navigation;
