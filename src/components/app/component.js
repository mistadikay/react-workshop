import React from 'react';

import Search from '~/components/search';
import ViewSwitcher from '~/components/view-switcher';
import ProductList from '~/components/product-list';
import CatalogStatus from '~/components/catalog-status';

export default class App extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        // while data is not loaded, show a loader
        if (this.props.data === null) {
            return (
                <div block="app" mods={{ loading: true }}>
                    Loading... Please wait
                </div>
            );
        }

        return (
            <div block="app">
                <Search placeholder="Search in the products list" />
                <div block="app" elem="main-content">
                    <CatalogStatus title={this.props.title} productCount={this.props.productCount}>
                        <ViewSwitcher />
                    </CatalogStatus>
                    <ProductList data={this.props.data} />
                </div>
            </div>
        );
    }
}
