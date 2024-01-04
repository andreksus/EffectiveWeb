import { FC } from 'react';
import './sliderSection.css'
import avatar from '../../assets/Group 5.svg'
import dots from '../../assets/Group.svg'
import element from '../../assets/element.svg'
import slider from '../../assets/slider.svg'
import lightArrow from '../../assets/light-arrow.svg'
import boldArrow from '../../assets/bold-arrow.svg'

export const SliderSection: FC = () => {
    return (
        <div className='flex align-center column'>
            <div className='body margin-top flex column align-center'>
                <img src={dots} className='dots' alt="" />
                <h1 className='title'>What our customer are saying</h1>
                <div className="divider"></div>
                <div className="flex row align-center margin-top_50">
                    <div className="profile flex row">
                        <img src={avatar} alt="" />
                        <div className="flex column margin-left_30 justify-center">
                            <p className="bold margin_0">Edward Newgate</p>
                            <p className="light margin_0">Dounder Circle</p>
                        </div>
                    </div>
                    <p className="text width_420 margin-left_110 margin_0">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                </div>
                <img src={element} className='dots2' alt="" />
                <div className='flex row justify-center'>
                    <img src={lightArrow} className='slider' alt="" />
                    <img src={slider} className='slider' alt="" />
                    <img src={boldArrow} className='slider' alt="" />
                </div>
            </div>
        </div>

    );
}