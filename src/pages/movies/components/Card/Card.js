import * as React from 'react';
import {useHistory} from 'react-router-dom';
import styles from './Card.module.css'
import {Button} from "../../../../components/button";
import {Badge} from "../../../../components/badge";

const Card = ({
                  Poster,
                  Title,
                  Type,
                  Year,
                  imdbID,
                  onPreviewPoster,
              }) => {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={Poster} alt={Title} className={styles.poster} loading='lazy'/>
                <Badge className={styles.badge} type={Type}>{Type}</Badge>
                <div className={styles.imageOptions}>
                    <Button
                        type='button'
                        variant='secondary'
                        onClick={() => onPreviewPoster(imdbID)}>
                        Preview
                    </Button>
                </div>
            </div>
            <div className={styles.description}>
                <h5>{Title} ({Year})</h5>
                <div>
                    <Button
                        type='button'
                        variant='secondary'
                        onClick={() => history.push(`/movie/${imdbID}`)}
                    >
                        See Detail
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Card;
