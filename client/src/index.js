import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,

)


// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from "react-redux";
// import {BrowserRouter} from 'react-router-dom'
//
// import App from './App';
// import store from "./store/store";
//
// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
