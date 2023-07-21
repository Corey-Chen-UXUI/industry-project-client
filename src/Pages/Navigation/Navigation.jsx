import "./Navigation.scss";
import NavigationLanding from "../../Components/NavigationLanding/NavigationLanding";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavigationLanding/>
            {/* <Modal/> */}
        </div>
    );
};

export default Navigation;