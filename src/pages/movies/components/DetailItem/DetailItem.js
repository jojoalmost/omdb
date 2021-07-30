import * as React from 'react';
import styles from './DetailItem.module.css';
import {useSelector} from "react-redux";
import {getMovieDetail} from "../../../../stores/movies/selectors";

const DetailItem = () => {
    const {
        Actors,
        Awards,
        BoxOffice,
        Country,
        DVD,
        Director,
        Genre,
        Language,
        Metascore,
        Plot,
        Poster,
        Production,
        Rated,
        Ratings = [],
        Released,
        Runtime,
        Title,
        Type,
        Website,
        Writer,
        Year,
        imdbRating,
        imdbVotes,
    } = useSelector(getMovieDetail);
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <img src={Poster} alt={Title} loading="lazy"/>
            </div>
            <div className={styles.rightContent}>
                <table className={styles.tableDetail}>
                    <tbody>
                    <tr>
                        <td>Actors</td>
                        <td>{Actors}</td>
                    </tr>
                    <tr>
                        <td>Awards</td>
                        <td>{Awards}</td>
                    </tr>
                    <tr>
                        <td>Box Office</td>
                        <td>{BoxOffice}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{Country}</td>
                    </tr>
                    <tr>
                        <td>DVD</td>
                        <td>{DVD}</td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>{Director}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>{Genre}</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>{Language}</td>
                    </tr>
                    <tr>
                        <td>Metascore</td>
                        <td>{Metascore}</td>
                    </tr>
                    <tr>
                        <td>Plot</td>
                        <td>{Plot}</td>
                    </tr>
                    <tr>
                        <td>Production</td>
                        <td>{Production}</td>
                    </tr>
                    <tr>
                        <td>Rated</td>
                        <td>{Rated}</td>
                    </tr>
                    <tr>
                        <td>Ratings</td>
                        <td>
                            {Ratings.map(item =>
                                <div key={item.Source}>{`${item.Source} - ${item.Value}`}</div>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Released</td>
                        <td>{Released}</td>
                    </tr>
                    <tr>
                        <td>Runtime</td>
                        <td>{Runtime}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{Type}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{Website}</td>
                    </tr>
                    <tr>
                        <td>Writer</td>
                        <td>{Writer}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{Year}</td>
                    </tr>
                    <tr>
                        <td>imdb Rating</td>
                        <td>{imdbRating}</td>
                    </tr>
                    <tr>
                        <td>imdbVotes</td>
                        <td>{imdbVotes}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DetailItem;
