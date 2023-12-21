import {FC} from "react";
import "./style.css"


export const Header : FC = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logoCircle">
                    <div className="logoT">
                        T
                    </div>
                </div>
                <div className="logoText">HealthCare</div>
            </div>
            <div className="navBar">
                <div className="navText navText-home">Home</div>
                <div className="navText">Find a doctor</div>
                <div className="navText">Apps</div>
                <div className="navText">Testimonials</div>
                <div className="navText">About us</div>
            </div>
        </div>
    )
}