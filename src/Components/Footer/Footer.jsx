import "./Footer.scss";
import Github from "../../Assets/Icons/github-mark-white.svg";
import Google from "../../Assets/Icons/google-g.svg";
import Figma from "../../Assets/Icons/figma-icon.svg";
import Logo from "../../Assets/Icons/umbrella-logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer__logo" to={"/"}><img src={Logo} alt="umbrella-logo"></img></Link>
      <div className="footer__socials">
        <Link className="footer__socials-image footer__socials-github" to={"/"}><img src={Github} alt="github-cat-logo"></img></Link>
        <Link className="footer__socials-image footer__socials-google" to={"/"}><img src={Google} alt="google-g-logo"></img></Link>
        <Link className="footer__socials-image footer__socials-figma" to={"/"}><img src={Figma} alt="figma-logo"></img></Link>
      </div>
    </div>
  )
}

export default Footer