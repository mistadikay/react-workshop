import React from 'react';

export default class BuyButton extends React.Component {
    render() {
        return (
            <div className="button-buy product-card__button-buy">
                <div className="button-buy__text">{this.props.children}</div>
            </div>
        );
    }
}
