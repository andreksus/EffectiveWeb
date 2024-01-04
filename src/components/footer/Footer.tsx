import { FC } from "react";
import './footerStyle.css'
import footer1 from '../../assets/ell.svg'
import footer12 from '../../assets/footer11.svg'

export const Footer: FC = () => {
    return (
        <div className="center">
            <img className="footer11" src={footer12} alt="" />
            <div className="footer-row">
                <div className="footer-first">
                    <div className="logo-flex">
                        <div className="logo_footer">
                            <div className="T">T</div>
                        </div>
                        <h1 className="footer-first_title">
                            HealthCare
                        </h1>
                    </div>
                    <p className="footer-first_title2">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className="footer-first_title3">©HealthCare PTY LTD 2023. All rights reserved</p>
                </div>
                <div className="column">
                    <p className="footer-second-big margin-footer_0">Company</p>
                    <p className="footer-second-small margin-footer_0">About</p>
                    <p className="footer-second-small margin-footer_0">Testimanials</p>
                    <p className="footer-second-small margin-footer_0">Find a doctor</p>
                    <p className="footer-second-small margin-footer_0">Apps</p>
                </div>
                <div className="column">
                    <p className="footer-second-big margin-footer_0">Region</p>
                    <p className="footer-second-small margin-footer_0">Indonesia</p>
                    <p className="footer-second-small margin-footer_0">Singapore</p>
                    <p className="footer-second-small margin-footer_0">Hongkong</p>
                    <p className="footer-second-small margin-footer_0">Canada</p>
                </div>
                <div className="column">
                    <p className="footer-second-big margin-footer_0">Help</p>
                    <p className="footer-second-small margin-footer_0">Help center</p>
                    <p className="footer-second-small margin-footer_0">Contact support</p>
                    <p className="footer-second-small margin-footer_0">Instructions</p>
                    <p className="footer-second-small margin-footer_0">How it works</p>
                </div>
            </div>
            <img className="footer22" src={footer1} alt="" />
        </div>
    );
}