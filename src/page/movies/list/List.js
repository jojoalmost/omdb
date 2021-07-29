import * as React from 'react';
import {Title} from "../components";
import api from "../../../utils/api";
import Card from "../components/Card";

import styles from "./List.module.css"
import SearchBar from "../components/SearchBar";

const List = () => {
    const [movies, setMovies] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [filter, setfilter] = React.useState('');
    const [page, setPage] = React.useState(1);

    const handleSearch = (value) => {
        setQuery(value);
    };
    React.useEffect(() => {
        api.get('', {
            params: {
                s: 'Disney',
                page: page,
            }
        }).then(res => {
            console.log(res);
            setMovies(res.Search);
        })
    }, []);
    return (
        <div>
            <Title title="Omdb Movie List"/>
            <SearchBar
                onSearch={handleSearch}
                query={query}
                onFilter={setfilter}
                filterBy={filter}
            />
            <div className={styles.cardContainer}>
                {movies.map(movie => <Card {...movie} />)}
            </div>
        </div>
    );
}
export default List;
