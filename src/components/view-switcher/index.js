import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="component-switcher">
                <span>View</span>
                <div className="switchers">
                    {this.props.items.map(view => {
                        return (
                            <a className={'switcher' + (view === this.props.selected ? ' selected' : '')}>
                                <i className={`icon-svg catalog--view-${view}`} key={view} />
                                {view}
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    }
}
