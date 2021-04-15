import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Nav from './components/Nav';
import FindWeather from './components/FindWeather';
import WeatherToday from './components/WeatherToday';
import WeatherForecast from './components/WeatherForecast';

import './styles/App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={FindWeather} />
                        <Route path="/weatherToday" exact component={WeatherToday} />
                        <Route path="/weatherForecast" exact component={WeatherForecast} />
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
