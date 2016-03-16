import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '#app';

import './assets/styles.css';

function rootReducer(state = {}, action) {
    return state;
}

const store = createStore(rootReducer, {
    catalog: {
        views: [ 'grid', 'list' ],
        selectedView: 'grid'
    }
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
