import {FC} from "react";
import styles from "./style.module.css"


export const Header : FC = () => {
    return (
        <div className={styles["header"]}>
            <div className={styles["logo"]}>
                <div className={styles["logoCircle"]}>
                    <p className={styles["logoT"]}>
                        T
                    </p>
                </div>
                <h3 className={styles["logoText"]}>HealthCare</h3>
            </div>
            <div className={styles["navBar"]}>
                <p className={styles["navText-home"]}>Home</p>
                <p className={styles["navText"]}>Find a doctor</p>
                <p className={styles["navText"]}>Apps</p>
                <p className={styles["navText"]}>Testimonials</p>
                <p className={styles["navText"]}>About us</p>
            </div>
        </div>
    )
}