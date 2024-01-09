import { FC } from 'react'
import styles from'./serviceStyle.module.css'
import img from '../../assets/element2.svg'

export const BackElement : FC = () => {
    return (
    <img className={styles['back-element']} src={img} alt="image" />
    );
}