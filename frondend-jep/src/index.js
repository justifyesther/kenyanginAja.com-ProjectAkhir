import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import './supports/lib/bootstrap/css/bootstrap.min.css';
import './supports/lib/font-awesome/css/font-awesome.min.css';
import './supports/css/style1.css';
import './supports/lib/font-awesome/css/font-awesome.css';
import './supports/RegisLog/css/styleRegisLog.css';
import './supports/RegisLog/fonts/material-icon/css/material-design-iconic-font.min.css';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
