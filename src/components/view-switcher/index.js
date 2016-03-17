import { connect } from 'react-redux';
import ViewSwitcher from './component.js';

const mapStateToProps = state => {
    return {
        items: state.catalog.views,
        selected: state.catalog.selectedView
    };
};

export default connect(mapStateToProps)(ViewSwitcher);
