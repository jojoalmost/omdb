import * as React from 'react';
import Card from "./Card";

const ListItem = ({movies}) => {
    return (
        <div>
            {movies.map(movie => <Card {...movie} />)}
        </div>
    )
}
export default ListItem;
