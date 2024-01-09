import { FC } from "react";
import styles from'./articleStyle.module.css'
import articleArrow from '../../assets/article-arrow.svg'

export const Article : FC<{img: string, boldTitle: string, lightTitle: string}> = ({img, boldTitle, lightTitle}) => {
    return (
        <div className={styles["article-body"]}>
            <img className={styles["article-img"]} src={img} alt="img" />
            <p className={styles["article-bold_text"]}>{boldTitle}</p>
            <p className={styles["article-light_text"]}>{lightTitle}</p>
            <p className={styles["article-blue_text"]}>
                Read more
                <img className={styles["article-arrow"]} src={articleArrow} alt="" />
                </p>
        </div>
    );
}