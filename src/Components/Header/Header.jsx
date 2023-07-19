import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Icons/umbrella-logo.png";

const Header = () => {
  return (
    <div className="header">
      <a className="header__logo"><img src={Logo} alt="umbrella-logo"></img></a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item header__nav-list-item--home"><Link to={"/"}>Home</Link></li>
          <li className="header__nav-list-item header__nav-list-item--feature"><Link to={"/feature"}>Feature</Link></li>
          <li className="header__nav-list-item header__nav-list-item--about"><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header