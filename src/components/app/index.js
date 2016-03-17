import { connect } from 'react-redux';
import App from './component.js';

const mapStateToProps = state => {
    return {
        data: state.catalog.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMount() {
            console.log('mounted and ready to get data');
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
