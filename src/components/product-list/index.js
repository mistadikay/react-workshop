import React from 'react';

import Product from '~/components/product';

export default class extends React.Component {
    render() {
        if (this.props.view === 'grid') {
            return (
                <div className="product_list grid">
                    <Product view={this.props.view} />
                </div>
            );
        }

        return (
            <div className="product_list list">
                <Product view={this.props.view} />
            </div>
        );
    }
}
