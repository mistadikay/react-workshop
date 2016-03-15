import React from 'react';

import Product from '~/components/product';

export default class extends React.Component {
    render() {
        return (
            <div className={`product_list ${this.props.view}`}>
                <Product view={this.props.view} />
            </div>
        );
    }
}
