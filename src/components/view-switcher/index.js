import { connect } from 'react-redux';
import ViewSwitcher from './component.js';
import { selectView } from '~/actions';

const mapStateToProps = state => {
    return {
        items: state.catalog.views,
        selected: state.catalog.selectedView
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange(view) {
            dispatch(selectView(view));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewSwitcher);
