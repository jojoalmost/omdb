import * as React from 'react';
import styles from './Badge.module.css'

const Badge = ({children, className, type}) => {
    let badgeType;
    switch (type) {
        case 'movie':
            badgeType = styles.danger;
            break;
        case 'series':
            badgeType = styles.secondary;
            break;
        default:
            badgeType = styles.primary;
            break;
    }
    return (
        <div className={`${badgeType} ${styles.badge} ${className} `}>{children}</div>
    )
};


export default Badge;
