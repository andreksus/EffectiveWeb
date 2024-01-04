import { FC } from 'react'
import './style.css'

export const Card: FC<{img: string, titleBold: string, titleLight: string}> = ({img, titleBold, titleLight}) => {


    return (
        <div className='card'>
            <img className='img margin_left' src={img} alt="" />
            <p className='title-bold margin_left'>{titleBold}</p>
            <p className='title-light margin_left'>{titleLight}</p>
        </div>
    )
}