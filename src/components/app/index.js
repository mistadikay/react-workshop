import { connect } from 'react-redux';
import App from './component.js';
import { getCatalogData } from '~/actions';

function productCountSelector(data) {
    if (data === null) {
        return 0;
    }

    return data.product_count;
}

const mapStateToProps = state => {
    return {
        data: state.catalog.data,
        productCount: productCountSelector(state.catalog.data)
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
