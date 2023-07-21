import "./ToolTipModal.scss";
import { Link } from "react-router-dom";
import close from "../../Assets/Icons/x.png";

const ToolTipModal = () => {
    return (
        <>
            <section className="tooltip">
                <section className="tooltip__top">
                    <h1 className="tooltip__title">Bard Education</h1> <img src={close} className="tooltip__close" />
                </section>

                <section className="tooltip__description">How does google maps know the best route? </section>
                <section className="tooltip__sub-description">Maps uses ai to pull live information from ...</section>
                <Link to="">
                    <section className="tooltip__link">Ask Bard How</section>
                </Link>
            </section>
        </>
    );
};
export default ToolTipModal;
