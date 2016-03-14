import React from 'react';
import './styles.css';

import Search from '~/components/search';
import ViewSwitcher from '~/components/view-switcher';
import ProductList from '~/components/product-list';
import Filter from '~/components/filter';

export default class extends React.Component {
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
                            <ViewSwitcher view="grid" />
                        </div>
                    </div>
                    <ProductList view="grid" />
                </div>
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
                            <ViewSwitcher view="list" />
                        </div>
                    </div>
                    <ProductList view="list" />
                </div>
            </div>
        );
    }
}
