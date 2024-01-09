import { FC } from 'react'
import styles from './style.module.css'

export const Card: FC<{img: string, titleBold: string, titleLight: string}> = ({img, titleBold, titleLight}) => {


    return (
        <div className={styles['card']}>
            <img className={styles['img']} src={img} alt="" />
            <p className={styles['title-bold']}>{titleBold}</p>
            <p className={styles['title-light']}>{titleLight}</p>
        </div>
    )
}