import { FC } from 'react'
import './style.css'
import imgShape from '../../assets/Vector.svg'
import { Card } from '../Card/Card'
import { cards } from '../../model/cardModel'
import { BackElement } from './BackElement'

export const Services: FC = () => {
    return (
        <div className='body-services'>
            <div className='title'>Our services</div>
            <div className='divider'></div>
            <div className='text'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</div>
            <img className='img-shape' src={imgShape} alt="" />
            <div className='wrapper1'>
                <Card img={cards[0].img} titleBold={cards[0].titleBold} titleLight={cards[0].titleLight}></Card>
                <Card img={cards[1].img} titleBold={cards[1].titleBold} titleLight={cards[1].titleLight}></Card>
                <Card img={cards[2].img} titleBold={cards[2].titleBold} titleLight={cards[2].titleLight}></Card>                
            </div>
            <BackElement />
            <div className='wrapper2'>
                <Card img={cards[3].img} titleBold={cards[3].titleBold} titleLight={cards[3].titleLight}></Card>
                <Card img={cards[4].img} titleBold={cards[4].titleBold} titleLight={cards[4].titleLight}></Card>
                <Card img={cards[5].img} titleBold={cards[5].titleBold} titleLight={cards[5].titleLight}></Card>
            </div>
            <button className='button'>Learn more</button>
        </div>
    )
}