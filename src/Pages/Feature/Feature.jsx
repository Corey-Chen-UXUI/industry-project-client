import "./Feature.scss";
import Form from "../../Components/Form/Form";
import AiTool from "../../Components/AiTool/AiTool";
import ToolTipModal from "../../Components/ToolTipModal/ToolTipModal";
import PhoneLanding from "../../Components/PhoneLanding/PhoneLanding";

const Feature = () => {
    function submitHandler(e) {
        e.preventDefault();
        console.log("Test");
        window.location.href = "/feature/1";
    }

    return (
        <div className="feature">
            {/* <AiTool /> */}

            <PhoneLanding />
            <form onSubmit={submitHandler}>
                <input placeholder="Search here" />
            </form>
        </div>
    );
};

export default Feature;
