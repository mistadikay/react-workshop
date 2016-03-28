import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from '#app';

import './assets/styles.css';

const devToolsMiddleware = window.devToolsExtension && window.devToolsExtension();

function catalogReducer(catalog = {}, action) {
    switch (action.type) {
        case 'VIEW_SELECT':
            return {
                ...catalog,
                selectedView: action.view
            };
        case 'DATA_LOADED':
            return {
                ...catalog,
                data: action.data
            };
        default:
            return catalog;
    }
}

function rootReducer(state = {}, action) {
    return {
        ...state,
        catalog: catalogReducer(state.catalog, action)
    };
}

const store = createStore(
    rootReducer,
    {
        catalog: {
            data: null,
            views: [ 'grid', 'list' ],
            selectedView: 'grid'
        }
    },
    applyMiddleware(
        thunkMiddleware,
        devToolsMiddleware
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
