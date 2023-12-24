import { FC } from 'react';
import './sliderSection.css'
import avatar from '../../assets/Group 5.svg'
import dots from '../../assets/Group.svg'

export const SliderSection: FC = () => {
    return (
        <div className='body margin-top flex column align-center'>
            <img src={dots} className='dots' alt="" />
            <div className='title'>What our customer are saying</div>
            <div className="divider"></div>
            <div className="flex row align-center">
                <div className="profile flex row">
                    <img src={avatar} alt="" />
                    <div className="flex column margin-left_30 justify-center">
                        <div className="bold">Edward Newgate</div>
                        <div className="light">Dounder Circle</div>
                    </div>
                </div>
                <div className="text width_420 margin-left_110">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</div>
            </div>
        </div>
    );
}