import React from 'react';

import ProductRating from '~/components/product-rating';
import BuyButton from '~/components/button-buy';
import Price from '~/components/price';

export default class extends React.Component {
    render() {
        if (this.props.view === 'grid') {
            return (
                <div className="product-card">
                    <a href="http://www.lazada.vn/usb-sandisk-cruzer-edge-cz52-16gb-den-phoi-do-1245208.html">
                        <div className="product-card__img">
                            <img alt="USB Sandisk Cruzer Edge CZ52 16GB (Đen phối đỏ)" title="USB Sandisk Cruzer Edge CZ52 16GB (Đen phối đỏ)" src="http://vn-live-01.slatic.net/p/o-cung-di-dong-wd-elements-1-5tb-den-1035-2263071-1-catalog_233.jpg?233_resize=1" />
                        </div>
                        <div className="product-card__description">
                            <div className="product-card__name-wrap">
                                <span className="product-card__name">USB Sandisk Cruzer Edge CZ52 16GB (Đen phối đỏ)</span>
                            </div>
                            <div className="price-block--grid">
                                <Price />
                                <ProductRating />
                                <BuyButton>BUY NOW</BuyButton>
                            </div>
                        </div>
                    </a>
                </div>
            );
        }

        return (
            <div className="product-card">
                <a href="http://www.lazada.vn/usb-sandisk-cruzer-edge-cz52-16gb-den-phoi-do-1245208.html">
                    <div className="product-card__img">
                        <img alt="USB Sandisk Cruzer Edge CZ52 16GB (Đen phối đỏ)" title="USB Sandisk Cruzer Edge CZ52 16GB (Đen phối đỏ)" src="http://vn-live-01.slatic.net/p/o-cung-di-dong-wd-elements-1-5tb-den-1035-2263071-1-catalog_233.jpg?233_resize=1" />
                    </div>
                    <div className="product-card__description">
                        <div className="price-block--list">
                            <Price />
                            <BuyButton>BUY NOW</BuyButton>
                        </div>
                        <div className="product-card__name-wrap">
                            <span title="Ổ cứng di động WD Elements 1.5TB (Đen)" className="product-card__name">Ổ cứng di động WD Elements 1.5TB (Đen)</span>
                        </div>
                        <ProductRating />
                        <div className="product-card__describtion--full">
                            <ul className="prd-attributesList">
                                <li><span>Ổ cứng di động</span></li>
                                <li><span>Dung lượng 1.5TB</span></li>
                                <li><span>Kết nối USB 3.0 tốc độ cao</span></li>
                                <li><span>Tương thích với USB 2.0</span></li>
                                <li><span>Tốc độ truyền dẽ liệu nhanh chóng</span></li>
                                <li><span>Thiết kế bền bỉ</span></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}
