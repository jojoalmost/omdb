import * as React from 'react';
import styles from './Card.module.css'
import {Button} from "../../../components/button";
import {Badge} from "../../../components/badge";

const Card = ({
                  Poster,
                  Title,
                  Type,
                  Year,
                  imdbID,
              }) => {
    return (
        <div className={styles.container} role="button">
            <div className={styles.imageContainer}>
                <img src={Poster} alt={Title} className={styles.poster} loading='lazy'/>
                <Badge className={styles.badge} type={Type}>{Type}</Badge>
                <div className={styles.imageOptions}>
                    <Button type='secondary' onClick={() => alert('dsads')}>Preview</Button>
                </div>
            </div>
            <div className={styles.description}>
                <h4>{Title}</h4>
                <div>{Year}</div>
            </div>
        </div>
    )
}
export default Card;
