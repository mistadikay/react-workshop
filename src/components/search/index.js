import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="header__search">
                <input className="header__search-input" type="search" placeholder="Search in the products list" />
            </div>
        );
    }
}
