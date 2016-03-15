import React from 'react';
import './styles.css';

export default function Search(props) {
    return (
        <div className="header__search">
            <input className="header__search-input" type="search" {...props} />
        </div>
    );
}
