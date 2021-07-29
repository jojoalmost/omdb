import * as React from 'react';
import {useHistory} from 'react-router-dom';
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
    const history = useHistory();

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
                <h4>{Title} ({Year})</h4>
                <Button type='secondary' onClick={() => history.push(`/movie/${imdbID}`)}>See Detail</Button>
            </div>
        </div>
    )
}
export default Card;
