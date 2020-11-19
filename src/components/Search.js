import React, { useState } from 'react';
import '../styles/search.scss';

const Search = () => {

    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting search ${search}`);
    }

    return (
        <form className="search-container" action="#" onSubmit={handleSubmit}>
            <i class="fas fa-search"></i>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            <button>Search</button>
        </form>
    )
}

export default Search;