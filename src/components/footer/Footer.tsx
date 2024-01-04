import { FC } from "react";
import styles from './footerStyle.module.css'
import footer2 from '../../assets/ell.svg'
import footer1 from '../../assets/footer11.svg'

export const Footer: FC = () => {
    return (
        <div>
            <div className={styles['footer1']}>
                <img src={footer1} alt="" />
            </div>
            <div className={styles['body']}>
                <div>
                    <div className={styles['logo']}>
                        <div className={styles['circle-logo']}>
                            <p className={styles['logo-T']}>T</p>
                        </div>
                        <h1 className={styles['h1']}>HealthCare</h1>
                    </div>
                    <p className={styles['p1']}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className={styles['p2']}>©HealthCare PTY LTD 2023. All rights reserved</p>
                </div>
                <div>
                    <h2 className={styles['h2']}>Company</h2>
                    <h4 className={styles['h4']}>About</h4>
                    <h4 className={styles['h4']}>Testimonials</h4>
                    <h4 className={styles['h4']}>Find a doctor</h4>
                    <h4 className={styles['h4']}>Apps</h4>
                </div>
                <div>
                    <h2 className={styles['h2']}>Region</h2>
                    <h4 className={styles['h4']}>Indonesia</h4>
                    <h4 className={styles['h4']}>Singapore</h4>
                    <h4 className={styles['h4']}>Hongkong</h4>
                    <h4 className={styles['h4']}>Canada</h4>
                </div>
                <div>
                    <h2 className={styles['h2']}>Jelp</h2>
                    <h4 className={styles['h4']}>Help center</h4>
                    <h4 className={styles['h4']}>Contact support</h4>
                    <h4 className={styles['h4']}>Instructions</h4>
                    <h4 className={styles['h4']}>How it works</h4>
                </div>
            </div>
            <div className={styles['footer2']}>
                <img src={footer2} alt="" />
            </div>
        </div>
    );
}