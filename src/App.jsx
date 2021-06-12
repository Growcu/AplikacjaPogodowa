import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <BrowserRouter>
                    <Switch />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
