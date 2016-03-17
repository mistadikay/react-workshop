import React from 'react';

import requestData from '~/../server';

import Search from '~/components/search';
import ViewSwitcher from '~/components/view-switcher';
import ProductList from '~/components/product-list';
import CatalogStatus from '~/components/catalog-status';

// a little helper to retrieve category name from server data
function getCategoryName(data) {
    return data.filters.find(filter => filter.id === 'category').options[0].label;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            productCount: 0
        };
    }

    // let's pretend it's from the server
    componentDidMount() {
        requestData(1500).then(this.updateData);
    }

    // when data from the server is loaded, update local state
    updateData = data => {
        this.setState({
            title: getCategoryName(data),
            productCount: data.product_count
        });
    };

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
                    <CatalogStatus title={this.state.title} productCount={this.state.productCount}>
                        <ViewSwitcher />
                    </CatalogStatus>
                    <ProductList data={this.props.data} />
                </div>
            </div>
        );
    }
}
