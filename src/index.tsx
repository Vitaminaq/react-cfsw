import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import { Provider } from 'react-redux';
import store from './store/index';
// import * as serviceWorker from './serviceWorker';
console.log(`当前app版本: ${process.env.REACT_APP_VERSION}`);

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
);

// serviceWorker.unregister();
