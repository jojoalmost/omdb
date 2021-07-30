import * as React from 'react';
import api from "../../../utils/api";

import styles from "./List.module.css"
import {ModalPoster, SearchBar, Title} from "../components";
import {useDebounce} from "../../../utils/hooks";
import {InfiniteScroll} from "../../../components/infinitescroll";
import {LoadingWrapper} from "../../../components/loading";
import ListItem from "../components/ListItem/ListItem";

const List = () => {
    const defaultMovies = 'disney';

    const [movies, setMovies] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [selected, setSelected] = React.useState({});
    const [showPoster, setShowPoster] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [totalPage, setTotalPage] = React.useState(0)

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
        setIsLoading(true);
        api.get('', {
            params: {
                s,
                page,
            }
        }).then(res => {
            const {Response: status, Search: data, totalResults, Error: errorMessage} = res;
            if (status === "False") throw new Error(errorMessage);
            const getTotalPage = Math.ceil(totalResults / data.length);
            setMovies(data);
            setTotalPage(getTotalPage);
        }).catch(e => {
            console.error(e);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const fetchMoviesMore = (newPage) => {
        setIsLoading(true);
        api.get('', {
            params: {
                s: query || defaultMovies,
                page: newPage,
            }
        }).then(res => {
            const {Response: status, Search: data, Error: errorMessage} = res;
            if (status === "False") throw new Error(errorMessage);
            setMovies([...movies, ...data]);

        }).catch(e => {
            console.error(e);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const loadMoreMovies = () => {
        const nextPage = page + 1;
        fetchMoviesMore(nextPage);
        setPage(nextPage);
    }

    React.useEffect(() => {
        fetchMovies(query || defaultMovies);
        setPage(1);
    }, [debouncedSearch]);

    return (
        <div className={styles.container}>
            <Title title="Omdb Movie List"/>
            <SearchBar
                onSearch={handleSearch}
                query={query}
            />
            <InfiniteScroll
                hasMoreData={page < totalPage}
                isLoading={isLoading}
                onBottomHit={loadMoreMovies}
                loadOnMount={false}
            >
                <ListItem movies={movies} onPreviewPoster={handlePreviewPoster}/>
                {isLoading && <LoadingWrapper />}
            </InfiniteScroll>
            <ModalPoster
                show={showPoster}
                {...selected}
                onClose={() => setShowPoster(!showPoster)}
            />
        </div>
    );
}
export default List;
