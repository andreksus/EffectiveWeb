import { FC } from "react";
import './articleStyle.css'
import articleArrow from '../../assets/article-arrow.svg'

export const Article : FC<{img: string, boldTitle: string, lightTitle: string}> = ({img, boldTitle, lightTitle}) => {
    return (
        <div className="flex column article-body">
            <img className="article-img article-margin_33" src={img} alt="img" />
            <div className="article-bold_text article-margin_33">{boldTitle}</div>
            <div className="article-light_text article-margin_33">{lightTitle}</div>
            <div className="article-blue_text article-margin_33">
                Read more
                <img className="article-arrow" src={articleArrow} alt="" />
                </div>
        </div>
    );
}