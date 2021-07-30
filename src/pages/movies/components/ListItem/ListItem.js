import * as React from 'react';
import Card from "../Card/Card";
import styles from "./ListItem.module.css";

const ListItem = ({movies, onPreviewPoster}) => (
    <div className={styles.container}>
        {movies.map((movie, index) => <Card key={index} {...movie} onPreviewPoster={onPreviewPoster}/>)}
    </div>
);
export default ListItem;
