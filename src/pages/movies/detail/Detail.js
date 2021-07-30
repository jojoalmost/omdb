import * as React from 'react';
import {useParams} from "react-router";
import styles from './Detail.module.css';

import api from "../../../utils/api";
import {useHistory} from "react-router-dom";
import {Title, DetailItem} from "../components";
import {LoadingWrapper} from "../../../components/loading";
import {Button} from "../../../components/button";
import {useDispatch, useSelector} from "react-redux";
import {hideLoading, showLoading} from "../../../stores/main/actions";
import {setMovieDetail} from "../../../stores/movies/actions";
import {getMainApp} from "../../../stores/main/selectors";
import {getMovieDetail} from "../../../stores/movies/selectors";

const Detail = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {movieId} = useParams();

    const {Title: title, Year: year} = useSelector(getMovieDetail);
    const {loading: isLoading} = useSelector(getMainApp);

    const fetchDetail = async () => {
        try {
            dispatch(showLoading());
            const res = await api.get('', {
                params: {
                    i: movieId,
                    plot: 'full'
                }
            });
            dispatch(setMovieDetail(res));
        } catch (e) {

        } finally {
            dispatch(hideLoading())
        }
    }

    React.useEffect(() => {
        fetchDetail();
    }, [movieId]);


    if (isLoading) return <LoadingWrapper/>;

    return (
        <div className={styles.container}>
            <Title title={`${title} (${year})`}/>
            <DetailItem/>
            <Button type="button" variant="secondary" onClick={() => history.push('/')}>Back</Button>
        </div>
    );
}

export default Detail;
