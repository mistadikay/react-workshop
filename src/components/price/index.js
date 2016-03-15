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
                <div block="price" mix={props.mix}>
                    <div block="price" elem="value">
                        {composePrice(discount, props.currency)}
                    </div>
                    <div block="price" elem="discount">
                        {composeDiscount(props.discountPercentage)}
                    </div>
                    <div block="price" elem="old-value-wrapper">
                        <div block="price" elem="old-value">
                            {composePrice(value, props.currency)}
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <div block="price" mix={props.mix}>
            <div block="price" elem="value">{composePrice(value, props.currency)}</div>
        </div>
    );
}
