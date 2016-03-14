import React from 'react';

export default class ProductRating extends React.Component {
    render() {
        return (
            <div className="product-card__rating">
                <div className="product-card__rating__stars" title="3.9182" alt="3.9182">
                    <div>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                    </div>
                    <div style={{ width: '78.364%' }}>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                    </div>
                </div>
                <span className="rating__number">(159 reviews)</span>
            </div>
        );
    }
}
