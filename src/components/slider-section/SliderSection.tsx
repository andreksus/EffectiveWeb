import { FC, useState } from 'react';
import styles from './sliderSection.module.css'
import avatar from '../../assets/Group 5.svg'
import dots from '../../assets/Group.svg'
import element from '../../assets/element.svg'
import lightArrow from '../../assets/light-arrow.svg'
import boldArrow from '../../assets/bold-arrow.svg'
import dot from '../../assets/Ellipse 5.svg'
import { sliderData } from '../../model/sliderModel';

export const SliderSection: FC = () => {

    const [slide, setSlide] = useState(0);

    function nextSlide() {
        if (slide != 3) {
            setSlide(slide + 1);
        }
    }

    function previosSlide() {
        if (slide != 0) {
            setSlide(slide - 1);
        }
    }

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
                            <p className={styles["bold"]}>{sliderData[slide].name}</p>
                            <p className={styles["light"]}>{sliderData[slide].company}</p>
                        </div>
                    </div>
                    <p className={styles["text"]}>{sliderData[slide].description}</p>
                </div>
                <img src={element} className={styles['dots2']} alt="" />
                <div className={styles['icons']}>
                    <img src={'0' === `${slide}`? lightArrow : boldArrow} className={'0' !== `${slide}`? styles['rotate-arrow'] + ' ' + styles['slider']: styles['slider']} alt="" onClick={() => {previosSlide(); console.log(slide)}}/>
                    <div className={styles['slider-dots']}>
                        <img src={dot} className={'0' === `${slide}`? styles['slider-dot_light'] : styles['slider-dot']} alt="" />
                        <img src={dot} className={'1' === `${slide}`? styles['slider-dot_light'] : styles['slider-dot']} alt="" />
                        <img src={dot} className={'2' === `${slide}`? styles['slider-dot_light'] : styles['slider-dot']} alt="" />
                        <img src={dot} className={'3' === `${slide}`? styles['slider-dot_light'] : styles['slider-dot']} alt="" />
                    </div>
                    <img src={'3' === `${slide}`? lightArrow : boldArrow} className={'3' === `${slide}`? styles['rotate-arrow'] + ' ' + styles['slider']: styles['slider']} alt="" onClick={() => {nextSlide(); console.log(slide)}}/>
                </div>
            </div>
        </div>

    );
}