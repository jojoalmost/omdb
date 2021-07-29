import * as React from 'react';

const SearchBar = ({onSearch, onFilter, query, filterBy}) => (
    <div>
        <div>
            <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                value={query}
                placeholder="Search IMDb"
            />
        </div>
        <div>
            <select
                onChange={(e) => onFilter(e.target.value)}
                value={filterBy}
            >
                <option value="" disabled selected>-Filter-</option>
                <option value="movie">movie</option>
                <option value="series">series</option>
                <option value="episode">episode</option>
            </select>
        </div>
    </div>
)
export default SearchBar;
