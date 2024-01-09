import { FC, useState } from 'react'
import styles from './articleStyle.module.css'
import dots from '../../assets/article-element.svg'
import articleShape from '../../assets/article-shape.svg'
import { Article } from '../article-component/Article'
import { cards } from '../../model/cardModel'

export const ArticleSection: FC = () => {
    const [visible, setVisible] = useState(1);

    if (visible){
        return (
            <div className={styles["body-section"]}>
                <div className={styles["article_title"]}>Check out our latest article</div>
                <div className={styles["article_div"]}></div>
                <img className={styles['article_dots']} src={dots} alt="" />
                <img className={styles['article-shape']} src={articleShape} alt="" />
                <div className={styles["articles"]}>
                    <Article img={cards[7].img} boldTitle={cards[7].titleBold} lightTitle={cards[7].titleLight} />
                    <Article img={cards[8].img} boldTitle={cards[8].titleBold} lightTitle={cards[8].titleLight} />
                    <Article img={cards[6].img} boldTitle={cards[6].titleBold} lightTitle={cards[6].titleLight} />
                    <div className={styles["article"]}></div>
                    <div className={styles["article"]}></div>
                </div>
                <button className={styles["viewbtn"]} onClick={() => {setVisible(0)}}>View all</button>
                <div className={styles["dots2"]}></div>
            </div>
        );
    }

    else {
        return (
            <div className={styles["body-section"]}>
                <div className={styles["article_title"]}>Check out our latest article</div>
                <div className={styles["article_div"]}></div>
                <img className={styles['article_dots']} src={dots} alt="" />
                <img className={styles['article-shape']} src={articleShape} alt="" />
                <div className={styles["articles"]}>
                    <Article img={cards[7].img} boldTitle={cards[7].titleBold} lightTitle={cards[7].titleLight} />
                    <Article img={cards[8].img} boldTitle={cards[8].titleBold} lightTitle={cards[8].titleLight} />
                    <Article img={cards[6].img} boldTitle={cards[6].titleBold} lightTitle={cards[6].titleLight} />
                    <div className={styles["article"]}></div>
                    <div className={styles["article"]}></div>
                </div>
                <div className={styles["articles-2"]}>
                    <Article img={cards[7].img} boldTitle={cards[7].titleBold} lightTitle={cards[7].titleLight} />
                    <Article img={cards[8].img} boldTitle={cards[8].titleBold} lightTitle={cards[8].titleLight} />
                    <Article img={cards[6].img} boldTitle={cards[6].titleBold} lightTitle={cards[6].titleLight} />
                </div>
                <button className={styles["viewbtn"]} onClick={() => {setVisible(1)}}>Hide</button>
                <div className={styles["dots2"]}></div>
            </div>
        );
    }
    
}