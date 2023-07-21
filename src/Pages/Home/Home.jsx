import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Card/Card";
import ToolTipModal from "../../Components/ToolTipModal/ToolTipModal";

const Home = () => {
    return (
        <div className="home">
            <Hero /> <ToolTipModal />
            <Card />
        </div>
    );
};

export default Home;
