import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from '#app';

import './assets/styles.css';

function rootReducer(state = {}, action) {
    return state;
}

const store = createStore(rootReducer);

render(<App />, document.getElementById('app'));
