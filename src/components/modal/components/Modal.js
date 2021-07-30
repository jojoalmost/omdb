import React from 'react';
import styles from './Modal.module.css'
import {Button} from "../../button";

const Modal = ({show, children, title, onClose, className}) => {
    if (!show) return null;
    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${className}`}>
                <div className={styles.header}>
                    <h3>{title}</h3>
                    <Button
                        className={styles.headerClose}
                        type='button'
                        onClick={onClose}
                        variant='transparent'>
                        &#215;
                    </Button>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
                <div className={styles.footer}>

                </div>
            </div>
        </div>
    )
}
export default Modal;
