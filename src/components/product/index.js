import React from 'react';

import ProductRating from '~/components/product-rating';
import BuyButton from '~/components/button-buy';
import Price from '~/components/price';
import './styles.css';

export default class Product extends React.Component {
    renderName(name) {
        return (
            <div className="product-card__name-wrap">
                <span title={name} className="product-card__name big">{name}</span>
            </div>
        );
    }
    renderDescription(product) {
        const rating = product.data.ratings_total;

        if (this.props.view === 'list') {
            return (
                <div className="product-card__description">
                    <div className="price-block--list">
                        <Price
                            mix={{
                                block: 'product',
                                elem: 'price',
                                mods: {
                                    view: this.props.view
                                }
                            }}
                            value={product.data.price}
                            discount={product.data.special_price}
                            discountPercentage={product.data.max_saving_percentage}
                            currency="VND"
                            />
                        <BuyButton>BUY NOW</BuyButton>
                    </div>
                    {this.renderName(product.data.name)}
                    <ProductRating value={rating.avr} total={rating.sum} />
                    <div className="product-card__describtion--full">
                        <ul className="prd-attributesList">
                            <li><span>{'Ổ cứng di động'}</span></li>
                            <li><span>{'Dung lượng 1.5TB'}</span></li>
                            <li><span>{'Kết nối USB 3.0 tốc độ cao'}</span></li>
                            <li><span>{'Tương thích với USB 2.0'}</span></li>
                            <li><span>{'Tốc độ truyền dẽ liệu nhanh chóng'}</span></li>
                            <li><span>{'Thiết kế bền bỉ'}</span></li>
                        </ul>
                    </div>
                </div>
            );
        }

        return (
            <div className="product-card__description">
                {this.renderName(product.data.name)}
                <div className="price-block--grid">
                    <Price
                        mix={{
                            block: 'product',
                            elem: 'price',
                            mods: {
                                view: this.props.view
                            }
                        }}
                        value={product.data.price}
                        discount={product.data.special_price}
                        discountPercentage={product.data.max_saving_percentage}
                        currency="VND"
                        />
                    <ProductRating value={rating.avr} total={rating.sum} />
                    <BuyButton>BUY NOW</BuyButton>
                </div>
            </div>
        );
    }

    render() {
        const { product } = this.props;

        return (
            <div className="product-card">
                <a href="http://www.lazada.vn/usb-sandisk-cruzer-edge-cz52-16gb-den-phoi-do-1245208.html">
                    <div className="product-card__img">
                        <img
                            alt={product.data.name}
                            src={product.images[0].path}
                            />
                    </div>
                    {this.renderDescription(product)}
                </a>
            </div>
        );
    }
}
