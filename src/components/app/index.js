import React from 'react';
import './styles.css';

import Search from '~/components/search';
import ViewSwitcher from '~/components/view-switcher';
import ProductList from '~/components/product-list';
import Filter from '~/components/filter';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedView: 'grid'
        };
    }

    render() {
        return (
            <div className="catalog">
                <Search />
                <div className="catalog__main__content">
                    <div className="catalog__status">
                        <div className="catalog__status__title">
                            <div className="component component-catalog_title">
                                <h1 className="catalog__title">Computers &amp; Laptops</h1>
                                <span className="catalog__quantity">18560 results</span>
                            </div>
                        </div>
                        <div className="catalog__status__filters">
                            <Filter />
                            <ViewSwitcher selected={this.state.selectedView} />
                        </div>
                    </div>
                    <ProductList view={this.state.selectedView} />
                </div>
            </div>
        );
    }
}
