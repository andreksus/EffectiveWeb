import { FC } from 'react'
import './style.css'

export const Card: FC<{img: string, titleBold: string, titleLight: string}> = ({img, titleBold, titleLight}) => {


    return (
        <div className='card'>
            <img className='img margin_left' src={img} alt="" />
            <div className='title-bold margin_left'>{titleBold}</div>
            <div className='title-light margin_left'>{titleLight}</div>
        </div>
    )
}