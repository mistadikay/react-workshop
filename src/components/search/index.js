import React from 'react';
import './styles.css';

export default function Search(props) {
    return (
        <div block="search">
            <input block="search" elem="input" type="search" {...props} />
        </div>
    );
}
