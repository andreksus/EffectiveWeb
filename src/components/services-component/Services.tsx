import { FC } from 'react'
import imgShape from '../../assets/Vector.svg'
import { Card } from '../card/Card'
import { cards } from '../../model/cardModel'
import { BackElement } from './BackElement'
import styles from './serviceStyle.module.css'

export const Services: FC = () => {
    return (
        <div className={styles['body-services']}>
            <h1 className={styles['titl']}>Our services</h1>
            <div className={styles['dividr']}></div>
            <p className={styles['tex']}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <img className={styles['img-shape']} src={imgShape} alt="" />
            <div className={styles['wrapper1']}>
                <Card img={cards[0].img} titleBold={cards[0].titleBold} titleLight={cards[0].titleLight}></Card>
                <Card img={cards[1].img} titleBold={cards[1].titleBold} titleLight={cards[1].titleLight}></Card>
                <Card img={cards[2].img} titleBold={cards[2].titleBold} titleLight={cards[2].titleLight}></Card>                
            </div>
            <BackElement />
            <div className={styles['wrapper2']}>
                <Card img={cards[3].img} titleBold={cards[3].titleBold} titleLight={cards[3].titleLight}></Card>
                <Card img={cards[4].img} titleBold={cards[4].titleBold} titleLight={cards[4].titleLight}></Card>
                <Card img={cards[5].img} titleBold={cards[5].titleBold} titleLight={cards[5].titleLight}></Card>
            </div>
            <button className={styles['button']}>Learn more</button>
        </div>
    )
}