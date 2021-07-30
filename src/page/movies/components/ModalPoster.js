import * as React from "react";
import {Modal} from "../../../components/modal";

import styles from "./ModalPoster.module.css"

const ModalPoster = ({show = false, Title: title = '', Poster: poster = '', onClose}) => {
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
