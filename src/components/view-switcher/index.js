import React from 'react';

export default class extends React.Component {
    render() {
        if (this.props.view === 'grid') {
            return (
                <div className="component-switcher">
                    <span>View</span>
                    <div className="switchers">
                        <a href="http://www.lazada.vn/may-vi-tinh-laptop/?viewType=gridView" className="switcher selected">
                            <i className="icon-svg catalog--view-grid"></i>
                            Grid
                        </a>
                        <a href="http://www.lazada.vn/may-vi-tinh-laptop/?viewType=listView" className="switcher">
                            <i className="icon-svg catalog--view-list"></i>
                            List
                        </a>
                    </div>
                </div>
            );
        }

        return (
            <div className="component-switcher">
                <span>View</span>
                <div className="switchers">
                    <a href="http://www.lazada.vn/may-vi-tinh-laptop/?viewType=gridView" className="switcher">
                        <i className="icon-svg catalog--view-grid"></i>
                        Grid
                    </a>
                    <a href="http://www.lazada.vn/may-vi-tinh-laptop/?viewType=listView" className="switcher selected">
                        <i className="icon-svg catalog--view-list"></i>
                        List
                    </a>
                </div>
            </div>
        );
    }
}
