import { connect } from 'react-redux';
import ViewSwitcher from './component.js';

const mapStateToProps = state => {
    return {
        items: state.catalog.views,
        selected: state.catalog.selectedView
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange(view) {
            console.log(view);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewSwitcher);
