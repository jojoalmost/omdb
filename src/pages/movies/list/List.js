import * as React from 'react';
import api from "../../../utils/api";

import styles from "./List.module.css"
import {ModalPoster, SearchBar, ListItem, Title} from "../components";
import {useDebounce} from "../../../utils/hooks";
import {InfiniteScroll} from "../../../components/infinitescroll";
import {LoadingWrapper} from "../../../components/loading";
import {useDispatch, useSelector} from "react-redux";
import {mergeMoviesList, setModalPoster, setMoviesList} from "../../../stores/movies/actions";
import {getMainApp} from "../../../stores/main/selectors";
import {clearErrorMessage, hideLoading, setErrorMessage, showLoading} from "../../../stores/main/actions";
import {Alert} from "../../../components/alert";
import {getMovies} from "../../../stores/movies/selectors";

const List = () => {
    const defaultMovies = 'disney';
    const dispatch = useDispatch();
    const {loading: isLoading, errorMessage} = useSelector(getMainApp);
    const {list: movies, totalPage} = useSelector(getMovies);

    const [query, setQuery] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [showPoster, setShowPoster] = React.useState(false);

    const search = query && query.length > 2 ? query : defaultMovies;

    const debouncedSearch = useDebounce(query, 500);

    const hasMoreData = page < totalPage;

    const handleSearch = (value) => {
        setQuery(value);
    };

    const handlePreviewPoster = id => {
        const find = movies.find(({imdbID}) => imdbID === id);
        dispatch(setModalPoster(find));
        setShowPoster(true);
    }

    const fetchData = async (isLoadMore = false, currentPage = 1) => {
        try {
            dispatch(showLoading());
            const res = await api.get('', {
                params: {
                    s: search,
                    page: currentPage,
                }
            })
            const {Response, Error: errorMsg, Search, totalResults} = res;
            if (Response === "False") throw new Error(errorMsg);
            if (isLoadMore) {
                dispatch(mergeMoviesList({Search}));
            } else {
                dispatch(setMoviesList({Search, totalResults}));
            }
            setPage(currentPage)
        } catch (e) {
            dispatch(setErrorMessage(e.message))
        } finally {
            dispatch(hideLoading())
        }
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        await fetchData(true, nextPage);
        setPage(nextPage);
    }

    React.useEffect(() => {
        dispatch(clearErrorMessage());
        fetchData();
        setPage(1);
    }, [debouncedSearch]);

    const renderList = () => {
        if (errorMessage) return <Alert type="error">{errorMessage}</Alert>
        return (
            <InfiniteScroll
                hasMoreData={hasMoreData}
                isLoading={isLoading}
                onBottomHit={handleLoadMore}
                loadOnMount={false}
            >
                <ListItem movies={movies} onPreviewPoster={handlePreviewPoster}/>
                {isLoading && <LoadingWrapper/>}
            </InfiniteScroll>
        )
    }

    return (
        <div className={styles.container}>
            <Title title="Omdb Movie List"/>
            <SearchBar
                onSearch={handleSearch}
                query={query}
            />
            {renderList()}
            <ModalPoster
                show={showPoster}
                onClose={() => setShowPoster(!showPoster)}
            />
        </div>
    );
}
export default List;
