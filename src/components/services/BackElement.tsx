import { FC } from 'react'
import './style.css'
import img from '../../assets/element2.svg'

export const BackElement : FC = () => {
    return (
    <img className='back-element' src={img} alt="image" />
    );
}