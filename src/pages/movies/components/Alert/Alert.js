import * as React from 'react';
import styles from './Alert.module.css'

const Alert = ({type, children}) => {
    let classType;
    switch (type) {
        case 'error':
            classType = styles.error;
            break;
        default:
            classType = styles.success;
            break;
    }
    return (
        <div className={`${styles.container} ${classType}`}>
            {children}
        </div>
    )
}
export default Alert;
