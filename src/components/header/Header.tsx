import {FC} from "react";
import "./style.css"


export const Header : FC = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logoCircle">
                    <p className="logoT">
                        T
                    </p>
                </div>
                <h3 className="logoText">HealthCare</h3>
            </div>
            <div className="navBar">
                <p className="navText navText-home">Home</p>
                <p className="navText">Find a doctor</p>
                <p className="navText">Apps</p>
                <p className="navText">Testimonials</p>
                <p className="navText">About us</p>
            </div>
        </div>
    )
}