import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">TITLE</h1>
      <p className="hero__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit praesentium </p>
      <Link to={"/feature"} className="hero__button"><button>TRY NOW</button></Link>
    </div>
  )
}

export default Hero