import React from 'react';
import styles from './Modal.module.css'
import buttonStyle from './post/PostForm/PostForm.module.css'

const Modal = ({show, children, title, onClose}) => {
    if (!show) return null;
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
                <div className={styles.footer}>
                    <button type="button" className={buttonStyle.buttonSubmit} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
