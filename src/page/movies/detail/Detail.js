import * as React from 'react';
import {useHistory, useParams} from "react-router";

import api from "../../../utils/api";
import DetailItem from "../components/DetailItem";
import {initStateMovieDetail} from "../../../utils/defaultState";
import Title from "../components/Title";

const Detail = () => {
    const [detail, setDetail] = React.useState(initStateMovieDetail);
    const {movieId} = useParams();
    React.useEffect(() => {
        api.get('', {
            params: {
                i: movieId
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
