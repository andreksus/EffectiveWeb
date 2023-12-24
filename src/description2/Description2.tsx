import { FC } from 'react'
import './style.css'

export const Description2: FC<{img: string, titleBold: string, titleLight: string, titleButton: string}> = ({img, titleBold, titleLight, titleButton}) => {
    return (
        <div className='margin_top'>
            <div className='body-desc'>
                <img className='img-descc' src={img} alt="" />
                <div className='desc-section'>
                    <div className='desc-text_bold'>{titleBold}</div>
                    <div className='divider'></div>
                    <div className='desc-text_light'>{titleLight}</div>
                    <button className='button'>{titleButton}</button>
                </div>
            </div>
        </div>
    )
}