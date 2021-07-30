import * as React from 'react';
import {useParams} from "react-router";

import api from "../../../utils/api";
import {initStateMovieDetail} from "../../../utils/defaultState";
import {Title, DetailItem} from "../components";

const Detail = () => {
    const [detail, setDetail] = React.useState(initStateMovieDetail);
    const {movieId} = useParams();
    React.useEffect(() => {
        api.get('', {
            params: {
                i: movieId,
                plot: 'full'
            }
        }).then(res => {
            console.log(res);
            setDetail(res);
        })
    }, [movieId]);

    const {Title: title, Year} = detail;
    return (
        <div>
            <Title title={`${title} (${Year})`}/>
            <DetailItem {...detail} />
        </div>
    );
}

export default Detail;
