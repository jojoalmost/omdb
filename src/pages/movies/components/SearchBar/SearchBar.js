import * as React from 'react';

import styles from './SearchBar.module.css';

const SearchBar = ({onSearch, query}) => (
    <div className={styles.container}>
        <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            value={query}
            placeholder="Search IMDb"
        />
    </div>
)
export default SearchBar;
