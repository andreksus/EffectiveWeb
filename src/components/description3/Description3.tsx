import { FC } from 'react'
import styles from './style.module.css'
import arrow from '../../assets/Arrow.svg'

export const Description3: FC<{img: string, titleBold: string, titleLight: string, titleButton: string}> = ({img, titleBold, titleLight, titleButton}) => {
    return (
        <div className={styles['margin_top']}>
            <div className={styles['body-descri']}>
                <div className={styles['desc-section']}>
                    <h1 className={styles['desc-text_bold']}>{titleBold}</h1>
                    <div className={styles['divider']}></div>
                    <p className={styles['desc-text_light']}>{titleLight}</p>
                    <button className={styles['button']}>
                        {titleButton}
                        <img className={styles['arrow']} src={arrow} alt="" /></button>
                </div>
                <img className={styles['img-descr']} src={img} alt="" />
            </div>
        </div>
    )
}