import "./Card.scss";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <h3 className="card__container-title">TITLE</h3>
        <p className="card__container-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <Link className="card__container-button" to={"/"}><button>TRY NOW</button></Link>
      </div>

      <div className="card__container">
        <h3 className="card__container-title">TITLE</h3>
        <p className="card__container-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <Link className="card__container-button" to={"/"}><button>TRY NOW</button></Link>
      </div>
    </div>
  )
}

export default Card