import React from 'react';

import Product from '~/components/product';

export default class extends React.Component {
    render() {
        return (
            <div className={`product_list ${this.props.view}`}>
                {this.props.data.results.map(product => {
                    return <Product product={product} view={this.props.view} key={product.id} />;
                })}
            </div>
        );
    }
}
