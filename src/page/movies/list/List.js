import * as React from 'react';
import {Title} from "../components";
import api from "../../../utils/api";
import Card from "../components/Card";

import styles from "./List.module.css"
import SearchBar from "../components/SearchBar";
import ModalPoster from "../components/ModalPoster";
import {useDebounce} from "../../../utils/hooks";

const List = () => {
    const defaultMovies = 'disney';

    const [movies, setMovies] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [selected, setSelected] = React.useState({});
    const [showPoster, setShowPoster] = React.useState(false);

    const debouncedSearch = useDebounce(query, 500);

    const handleSearch = (value) => {
        setQuery(value);
    };

    const handlePreviewPoster = id => {
        const find = movies.find(({imdbID}) => imdbID === id);
        setSelected(find);
        setShowPoster(true);
    }

    const fetchMovies = (s) => {
        api.get('', {
            params: {
                s,
                page,
            }
        }).then(res => {
            if (res.Response === "False") throw new Error(res.Error);
            console.log(res);
            setMovies(res.Search);
        }).catch(e => {
            console.error(e);
        })
    }

    React.useEffect(() => {
        fetchMovies(query || defaultMovies);
        setPage(1);
    }, [debouncedSearch]);

    return (
        <div>
            <Title title="Omdb Movie List"/>

            <SearchBar
                onSearch={handleSearch}
                query={query}
            />

            <div className={styles.cardContainer}>
                {movies.map(movie => <Card {...movie} onPreviewPoster={handlePreviewPoster}/>)}
            </div>

            <ModalPoster
                show={showPoster}
                {...selected}
                onClose={() => setShowPoster(!showPoster)}
            />
        </div>
    );
}
export default List;
