import * as React from 'react';
import {useParams} from "react-router";
import styles from './Detail.module.css';

import api from "../../../utils/api";
import {useHistory} from "react-router-dom";
import {initStateMovieDetail} from "../../../utils/defaultState";
import {Title, DetailItem} from "../components";
import {LoadingWrapper} from "../../../components/loading";
import {Button} from "../../../components/button";

const Detail = () => {
    const history = useHistory();

    const [detail, setDetail] = React.useState(initStateMovieDetail);
    const [isLoading, setIsLoading] = React.useState(false);

    const {movieId} = useParams();
    React.useEffect(() => {
        setIsLoading(true);
        api.get('', {
            params: {
                i: movieId,
                plot: 'full'
            }
        }).then(res => {
            console.log(res);
            setDetail(res);
        }).finally(()=>{
            setIsLoading(false);
        });
    }, [movieId]);

    const {Title: title, Year} = detail;

    if (isLoading) return <LoadingWrapper />;

    return (
        <div className={styles.container}>
            <Title title={`${title} (${Year})`}/>
            <DetailItem {...detail} />
            <Button type="button" variant="secondary" onClick={()=> history.push('/')}>Back</Button>
        </div>
    );
}

export default Detail;
