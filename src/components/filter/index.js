import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (
            <span>
                <span className="catalog__status__filters__title">Sort by:</span>
                <select className="component-dropdown">
                    <option value="price-desc">Price: High to Low</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="rating-desc">Rating: High to Low</option>
                    <option value="rating-asc">Rating: Low to High</option>
                    <option value="discount-desc">Discount: Hight to Low</option>
                    <option value="discount-asc">Discount: Low to High</option>
                </select>
            </span>
        );
    }
}
