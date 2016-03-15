import React from 'react';

export default function BuyButton(props) {
    return (
        <div className="button-buy product-card__button-buy">
            <div className="button-buy__text">{props.children}</div>
        </div>
    );
}
