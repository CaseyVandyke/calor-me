import React, { useState } from 'react';

const Search = () => {

    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting search ${search}`);
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <label>
                Search Bar
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            </label>
            <button>Search</button>
        </form>
    )
}

export default Search;