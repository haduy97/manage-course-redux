import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CourseReducer from './redux/reducers/CourseReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    course: CourseReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


