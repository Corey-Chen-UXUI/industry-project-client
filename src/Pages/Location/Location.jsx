import "./Location.scss";
import LocationLanding from "../../Components/LocationLanding/LocationLanding";
import { Link } from "react-router-dom";

const Location = () => {
    return (
        <div className="location">
            <LocationLanding />
            <Link to={"/feature/2"}>
                <button>Directions</button>
            </Link>
        </div>
    );
};

export default Location;
