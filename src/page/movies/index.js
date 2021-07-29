import React, {useEffect, useState} from 'react';
import api from "../../utils/api";

const Movies = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        api.get('', {
            params: {
                s: 'avatar',
            }
        }).then(res => {
            console.log(res);
            setList(res.Search);
        })
    }, [])

    return (
        <>
            <h1>Movie list</h1>
            <ul>
                {list.map(data =>
                    <li>{data.Title}</li>
                )}
            </ul>
        </>
    )
}
export default Movies;
