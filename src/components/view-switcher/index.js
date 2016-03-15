import React from 'react';

import ViewSwitcherItem from './item';

export default function ViewSwitcher(props) {
    return (
        <div className="component-switcher">
            <span>View</span>
            <div className="switchers">
                {props.items.map(view => (
                    <ViewSwitcherItem
                        selected={props.selected === view}
                        view={view}
                        onClick={props.onChange}
                        key={view}
                        >
                        {view}
                    </ViewSwitcherItem>
                ))}
            </div>
        </div>
    );
}
