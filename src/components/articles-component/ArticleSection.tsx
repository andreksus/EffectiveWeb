import { FC } from 'react'
import './articleStyle.css'
import dots from '../../assets/article-element.svg'
import articleShape from '../../assets/article-shape.svg'
import { Article } from '../article-component/Article'
import { cards } from '../../model/cardModel'

export const ArticleSection : FC = () => {
    return (
        <div className="flex column align-center margin-top_200">
            <div className="article_title">Check out our latest article</div>
            <div className="article_div"></div>
            <img className='article_dots' src={dots} alt="" />
            <img className='article-shape' src={articleShape} alt="" />
            <div className="flex row articles">
            <Article img={cards[7].img} boldTitle={cards[7].titleBold} lightTitle={cards[7].titleLight} />
            <Article img={cards[8].img} boldTitle={cards[8].titleBold} lightTitle={cards[8].titleLight} />
            <Article img={cards[6].img} boldTitle={cards[6].titleBold} lightTitle={cards[6].titleLight} />
                <div className="article"></div>
                <div className="article"></div>
            </div>
            <button className="viewbtn">View all</button>
            <div className="dots2"></div>
        </div>
    );
}