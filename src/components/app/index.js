import React from 'react';
import './styles.css';

import Search from '~/components/search';
import ViewSwitcher from '~/components/view-switcher';
import ProductList from '~/components/product-list';

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
                            <span className="catalog__status__filters__title">Sort by:</span>
                            <select className="component-dropdown">
                                <option value="price-desc">Price: High to Low</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="rating-desc">Rating: High to Low</option>
                                <option value="rating-asc">Rating: Low to High</option>
                                <option value="discount-desc">Discount: Hight to Low</option>
                                <option value="discount-asc">Discount: Low to High</option>
                            </select>
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
                            <span className="catalog__status__filters__title">Sort by:</span>
                            <select className="component-dropdown">
                                <option value="price-desc">Price: High to Low</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="rating-desc">Rating: High to Low</option>
                                <option value="rating-asc">Rating: Low to High</option>
                                <option value="discount-desc">Discount: Hight to Low</option>
                                <option value="discount-asc">Discount: Low to High</option>
                            </select>
                            <ViewSwitcher view="list" />
                        </div>
                    </div>
                    <ProductList view="list" />
                </div>
            </div>
        );
    }
}
