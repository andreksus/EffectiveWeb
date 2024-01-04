import { FC } from 'react';
import styles from './sliderSection.module.css'
import avatar from '../../assets/Group 5.svg'
import dots from '../../assets/Group.svg'
import element from '../../assets/element.svg'
import slider from '../../assets/slider.svg'
import lightArrow from '../../assets/light-arrow.svg'
import boldArrow from '../../assets/bold-arrow.svg'

export const SliderSection: FC = () => {
    return (
        <div className={styles['parent']}>
            <div className={styles['body']}>
                <img src={dots} className={styles['dots']} alt="" />
                <h1 className={styles['title']}>What our customer are saying</h1>
                <div className={styles["divider"]}></div>
                <div className={styles["profile-div"]}>
                    <div className={styles["profile-div_child"]}>
                        <img src={avatar} alt="" />
                        <div className={styles["profile-description"]}>
                            <p className={styles["bold"]}>Edward Newgate</p>
                            <p className={styles["light"]}>Dounder Circle</p>
                        </div>
                    </div>
                    <p className={styles["text"]}>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                </div>
                <img src={element} className={styles['dots2']} alt="" />
                <div className={styles['icons']}>
                    <img src={lightArrow} className={styles['slider']} alt="" />
                    <img src={slider} className={styles['slider']} alt="" />
                    <img src={boldArrow} className={styles['slider']} alt="" />
                </div>
            </div>
        </div>

    );
}