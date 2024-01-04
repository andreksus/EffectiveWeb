import { FC } from 'react'
import './style.css'

export const Description: FC<{img: string, titleBold: string, titleLight: string, titleButton: string}> = ({img, titleBold, titleLight, titleButton}) => {
    return (
        <div>
            <div className='body-desc'>
                <div className='desc-section'>
                    <h1 className='desc-text_bold'>{titleBold}</h1>
                    <p className='desc-text_light'>{titleLight}</p>
                    <button className='desc-button'>{titleButton}</button>
                </div>
                <img className='img-desc' src={img} alt="" />
            </div>
        </div>
    )
}