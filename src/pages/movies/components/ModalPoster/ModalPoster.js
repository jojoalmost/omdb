import * as React from "react";
import {Modal} from "../../../../components/modal";

import styles from "./ModalPoster.module.css"
import {useSelector} from "react-redux";
import {getModalData} from "../../../../stores/movies/selectors";

const ModalPoster = ({show = false, onClose}) => {
    const {Title: title, Poster: poster} = useSelector(getModalData);
    return (
        <Modal
            show={show}
            title={title}
            className={styles.modal}
            onClose={onClose}
        >
            <img src={poster} alt={poster} loading='lazy'/>
        </Modal>
    )
}
export default ModalPoster;
