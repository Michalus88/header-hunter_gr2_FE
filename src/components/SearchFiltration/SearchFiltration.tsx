import React, {useState} from "react";
import magnifer from '../../assets/img/magnifier.png';

export const SearchFiltration = () => {
    const [search, setSearch] = useState('');

    const clickSearch = () => {
        console.log(`Szukam ${search}`);
    }
    const clickFilter = () => {
        console.log('Filtrowanie');
    }
    return (
        <>
            <div className="search-filtration">
                <p className="input-wrapper">
                    <img onClick={clickSearch} src={magnifer} alt=""/>
                    <input
                        type="text"
                        value={search}
                        placeholder="Szukaj"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </p>
                <a href="#" onClick={clickFilter}>Filtrowanie</a>
            </div>
        </>
    );
};