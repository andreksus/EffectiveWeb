import { FC } from 'react'
import styles from './style.module.css'
import img from '../../assets/element.svg'

export const Dots : FC = () => {
    return (
        <img className={styles['img2']} src={img} alt="image" />
    );
}