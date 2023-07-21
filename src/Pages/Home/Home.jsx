import "./Home.scss";
import ModalBard from "../../Components/ModalBard/ModalBard";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Card/Card";
import ToolTipModal from "../../Components/ToolTipModal/ToolTipModal";

const Home = () => {
    return (
        <div className="home">
            <Hero /> <ToolTipModal />
            <ModalBard /> <Card />
        </div>
    );
};

export default Home;
