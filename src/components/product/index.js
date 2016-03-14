import React from 'react';

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
                                <div className="product-card__price">88.000 VND</div>
                                <div className="product-card__sale">- 51%</div>
                                <div className="old-price-wrap">
                                    <div className="product-card__old-price">179.000 VND</div>
                                </div>
                                <div className="product-card__rating">
                                    <div className="product-card__rating__stars" title="3.9182" alt="3.9182">
                                        <div>
                                            <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                            <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                            <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                            <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                            <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                        </div>
                                        <div style={{ width: '78.364%' }}>
                                            <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                            <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                            <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                            <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                            <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                        </div>
                                    </div>
                                    <span className="rating__number">(159 reviews)</span>
                                </div>
                                <div className="button-buy product-card__button-buy">
                                    <div className="button-buy__text">BUY NOW</div>
                                </div>
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
                            <div className="product-card__price">1.673.000 VND</div>
                            <div className="product-card__sale">- 16%</div>
                            <div className="product-card-info__fast-delivery-icon">
                                <i className="icon icon-express-shipping"></i>
                            </div>
                            <div className="product-card__old-price">1.990.000 VND</div>
                            <div className="button-buy product-card__button-buy">
                                <span className="button-buy__text">BUY NOW</span>
                            </div>
                        </div>
                        <div className="product-card__name-wrap">
                            <span title="Ổ cứng di động WD Elements 1.5TB (Đen)" className="product-card__name">Ổ cứng di động WD Elements 1.5TB (Đen)</span>
                        </div>
                        <div className="product-card__rating">
                            <div className="product-card__rating__stars" title="3.4167" alt="3.4167">
                                <div>
                                    <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                    <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                    <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                    <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                    <span className="icon-svg product-card__rating__icon-star-grey"></span>
                                </div>
                                <div style={{ width: '68.334%' }}>
                                    <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                    <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                    <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                    <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                    <span className="icon-svg product-card__rating__icon-star-orange"></span>
                                </div>
                            </div>
                            <span className="rating__number">(12 reviews)</span>
                        </div>
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
