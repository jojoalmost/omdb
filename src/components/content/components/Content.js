import * as React from 'react';
import styles from './Content.module.css';

const Content = ({children}) => (
        <div className={styles.container}>{children}</div>
);

export default Content;
