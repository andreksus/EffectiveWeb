import { FC } from 'react'
import './style.css'

export const Description3: FC<{img: string, titleBold: string, titleLight: string, titleButton: string}> = ({img, titleBold, titleLight, titleButton}) => {
    return (
        <div className='margin_top'>
            <div className='body-descri'>
                <div className='desc-section'>
                    <div className='desc-text_bold'>{titleBold}</div>
                    <div className='divider'></div>
                    <div className='desc-text_light'>{titleLight}</div>
                    <button className='button'>{titleButton}</button>
                </div>
                <img className='img-descr' src={img} alt="" />
            </div>
        </div>
    )
}