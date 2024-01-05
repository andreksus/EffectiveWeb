import { FC } from 'react'
import styles from './style.module.css'

export const Description: FC<{img: string, titleBold: string, titleLight: string, titleButton: string}> = ({img, titleBold, titleLight, titleButton}) => {
    return (
        <div>
            <div className={styles['body-desc']}>
                <div className={styles['desc-section']}>
                    <h1 className={styles['desc-text_bold']}>{titleBold}</h1>
                    <p className={styles['desc-text_light']}>{titleLight}</p>
                    <button className={styles['desc-button']}>{titleButton}</button>
                </div>
                <img className={styles['img-desc']} src={img} alt="" />
            </div>
        </div>
    )
}