import React from "react";
import { useNavigate } from "react-router-dom";

const CatSelction = () => {
    const navigate = useNavigate();
    const submitHandler1 = () => {
        navigate("/ilets");
    };
    const submitHandler2 = () => {
        navigate("/job");
    };
    const submitHandler3 = () => {
        navigate("/mockiim");
    };

    return (
        <div className="cat-selection-main">
            <div className="category-options">
                <div className="option">
                    <button className="category" onClick={submitHandler1}>
                        ILETS
                    </button>
                </div>
                <div className="option">
                    <button className="category" onClick={submitHandler2}>
                        {" "}
                        Job Interview{" "}
                    </button>
                </div>
                <div className="option">
                    <button className="category" onClick={submitHandler3}>
                        Mock IIM
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatSelction;
