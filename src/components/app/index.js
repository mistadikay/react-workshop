import React from 'react';
import './styles.css';

import requestData from '~/../server';

import Search from '~/components/search';
import ViewSwitcher from '~/components/view-switcher';
import ProductList from '~/components/product-list';

// a little helper to retrieve category name from server data
function getCategoryName(data) {
    return data.filters.find(filter => filter.id === 'category').options[0].label;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // initial data is null
            data: null,
            title: '',
            productCount: 0,
            views: [ 'grid', 'list' ],
            selectedView: 'grid'
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
            productCount: data.product_count,
            data
        });
    };

    handleViewChange = view => {
        this.setState({
            selectedView: view
        });
    }

    render() {
        // while data is not loaded, show a loader
        if (this.state.data === null) {
            return (
                <div className="catalog is-loading">
                    Loading... Please wait
                </div>
            );
        }

        return (
            <div className="catalog">
                <Search placeholder="Search in the products list" />
                <div className="catalog__main__content">
                    <div className="catalog__status">
                        <div className="catalog__status__title">
                            <div className="component component-catalog_title">
                                <h1 className="catalog__title">{this.state.title}</h1>
                                <span className="catalog__quantity">{this.state.productCount} results</span>
                            </div>
                        </div>
                        <div className="catalog__status__filters">
                            <ViewSwitcher
                                selected={this.state.selectedView}
                                items={this.state.views}
                                onChange={this.handleViewChange}
                                />
                        </div>
                    </div>
                    <ProductList view={this.state.selectedView} data={this.state.data} />
                </div>
            </div>
        );
    }
}
