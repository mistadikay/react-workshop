import React from 'react';

export default class ProductRating extends React.Component {
    render() {
        if (!this.props.value) {
            return null;
        }

        return (
            <div className="product-card__rating">
                <div
                    className="product-card__rating__stars"
                    title={this.props.value}
                    >
                    <div>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                        <span className="icon-svg product-card__rating__icon-star-grey"></span>
                    </div>
                    <div style={{ width: `${this.props.value * 20}%` }}>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                        <span className="icon-svg product-card__rating__icon-star-orange"></span>
                    </div>
                </div>
                <span className="rating__number">{`(${this.props.total} reviews)`}</span>
            </div>
        );
    }
}
