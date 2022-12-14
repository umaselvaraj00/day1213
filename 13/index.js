import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
 //import { Provider } from 'react';
import{ store }from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <React.StrictMode>  <App /> </React.StrictMode>
    <React.StrictMode><Provider store={store}>
        {/* <persistGate loading ={null} persistor={persistor}> */}
            <App/>
        {/* </persistGate> */}
        </Provider>
    </React.StrictMode>
  
  
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

