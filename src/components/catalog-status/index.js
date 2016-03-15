import React from 'react';

export default function CatalogStatus(props) {
    return (
        <div className="catalog__status">
            <div className="catalog__status__title">
                <div className="component component-catalog_title">
                    <h1 className="catalog__title">{props.title}</h1>
                    <span className="catalog__quantity">{props.productCount} results</span>
                </div>
            </div>
            <div className="catalog__status__filters">
                {props.children}
            </div>
        </div>
    );
}
