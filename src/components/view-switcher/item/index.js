import React from 'react';

export default class extends React.Component {
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.view);
        }
    }

    render() {
        return (
            <a
                className={'switcher' + (this.props.selected ? ' selected' : '')}
                onClick={this.handleClick}
                >
                <i className={`icon-svg catalog--view-${this.props.view}`} />
                {this.props.children}
            </a>
        );
    }
}
