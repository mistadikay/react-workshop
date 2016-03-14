import React from 'react';

export default class BuyButton extends React.Component {
    render() {
        return (
            <span>
                <div className="product-card__price">88.000 VND</div>
                <div className="product-card__sale">- 51%</div>
                <div className="old-price-wrap">
                    <div className="product-card__old-price">179.000 VND</div>
                </div>
            </span>
        );
    }
}
