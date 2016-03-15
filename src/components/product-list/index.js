import React from 'react';

import Product from '~/components/product';

export default function ProductList(props) {
    return (
        <div className={`product_list ${props.view}`}>
            {props.data.results.map(product => {
                return <Product product={product} view={props.view} key={product.id} />;
            })}
        </div>
    );
}
