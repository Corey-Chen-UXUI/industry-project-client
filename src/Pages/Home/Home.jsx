import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Card />
    </div>
  )
}

export default Home