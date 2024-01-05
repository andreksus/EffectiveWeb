import { FC } from 'react'
import styles from './style.module.css'

export const Description2: FC<{img: string, titleBold: string, titleLight: string, titleButton: string}> = ({img, titleBold, titleLight, titleButton}) => {
    return (
        <div className={styles['margin_top']}>
            <div className={styles['body-desc']}>
                <img className={styles['img-descc']} src={img} alt="" />
                <div className={styles['desc-section']}>
                    <h1 className={styles['desc-text_bold']}>{titleBold}</h1>
                    <div className={styles['divider']}></div>
                    <p className={styles['desc-text_light']}>{titleLight}</p>
                    <button className={styles['button']}>{titleButton}</button>
                </div>
            </div>
        </div>
    )
}