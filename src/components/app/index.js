import { connect } from 'react-redux';
import App from './component.js';
import { getCatalogData } from '~/actions';

const mapStateToProps = state => {
    return {
        data: state.catalog.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMount() {
            dispatch(getCatalogData());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
