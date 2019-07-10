import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/AppContainer'


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}


const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.querySelector("#root"))