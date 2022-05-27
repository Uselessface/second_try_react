import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state, subscribe, updateMessageValue} from "./redux/state";
import {sendMessage} from "./redux/state";
import {updatePostValue} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderApp = () =>{
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                sendMessage={sendMessage}
                updatePostValue={updatePostValue}
                updateMessageValue={updateMessageValue}
            />
        </React.StrictMode>
    );
}
rerenderApp(state);
subscribe(rerenderApp);

reportWebVitals();
