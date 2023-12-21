import { FC } from 'react'
import './style.css'
import img from '../../assets/element.svg'
import img2 from '../../assets/desc-img.svg'

export const Description: FC = () => {
    return (
        <div>
            <img className='img' src={img} alt="image" />
            <div className='body-desc'>
                <div className='desc-section'>
                    <div className='desc-text_bold'>Virtual healthcare for you</div>
                    <div className='desc-text_light'>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                    <button className='desc-button'>Consult today</button>
                </div>
                <img className='img-desc' src={img2} alt="" />
            </div>
        </div>
    )
}