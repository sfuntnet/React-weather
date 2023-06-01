import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './tailwind.css'
import {Provider} from "react-redux";
import store from "./redux/store/index.ts";
import Home from "./pages/Home.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home/>
        </Provider>

    </React.StrictMode>
);

reportWebVitals();