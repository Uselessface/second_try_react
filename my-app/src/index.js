import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderApp = (state) =>{
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
                updatePostValue={store.updatePostValue.bind(store)}
                updateMessageValue={store.updateMessageValue.bind(store)}
            />
        </React.StrictMode>
    );
}
rerenderApp(store.getState());
store.subscribe(rerenderApp);

reportWebVitals();
