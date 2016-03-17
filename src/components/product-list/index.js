import { connect } from 'react-redux';
import ProductList from './component.js';

const mapStateToProps = state => {
    return {
        view: state.catalog.selectedView
    };
};

export default connect(mapStateToProps)(ProductList);
