import { connect } from 'react-redux';
import App from './component.js';

const mapStateToProps = state => {
    return {
        data: state.catalog.data
    };
};

export default connect(
    mapStateToProps
)(App);
