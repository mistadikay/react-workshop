import React from 'react';
import './styles.css';

function composePrice(amount, currency) {
    return `${amount} ${currency}`;
}

function composeDiscount(value) {
    return `- ${value} %`;
}

export default function Price(props) {
    const value = Number(props.value);

    if ('discount' in props) {
        const discount = Number(props.discount);

        if (discount !== value) {
            return (
                <span>
                    <div className="product-card__price">
                        {composePrice(discount, props.currency)}
                    </div>
                    <div className="product-card__sale">
                        {composeDiscount(props.discountPercentage)}
                    </div>
                    <div className="old-price-wrap">
                        <div className="product-card__old-price">
                            {composePrice(value, props.currency)}
                        </div>
                    </div>
                </span>
            );
        }
    }

    return (
        <span>
            <div className="product-card__price">{composePrice(value, props.currency)}</div>
        </span>
    );
}
