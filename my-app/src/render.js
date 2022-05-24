import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";
import {sendMessage} from "./redux/state";
import {updatePostValue} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderApp = (state) =>{
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} sendMessage={sendMessage} updatePostValue={updatePostValue} />
        </React.StrictMode>
    );
}

reportWebVitals();
