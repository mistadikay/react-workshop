import React from 'react';

import ViewSwitcherItem from './item';

export default class extends React.Component {
    render() {
        return (
            <div className="component-switcher">
                <span>View</span>
                <div className="switchers">
                    {this.props.items.map(view => (
                        <ViewSwitcherItem
                            selected={this.props.selected === view}
                            view={view}
                            onClick={this.props.onChange}
                            key={view}
                            >
                            {view}
                        </ViewSwitcherItem>
                    ))}
                </div>
            </div>
        );
    }
}
