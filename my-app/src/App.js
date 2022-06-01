import React from "react";
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AppNavigation from "./components/AppNavigation/AppNavigation";
import AppFooter from "./components/AppFooter/AppFooter";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <Router>
            <div className={'wrapper'}>
                <AppHeader/>
                <AppNavigation friend={props.state.friends} />
                <main className={'app-main-content'}>
                    <Routes>
                        <Route path='/' element={<Profile
                            postData={props.state.profilePage.postData}
                            addPost={props.addPost}
                            newPostText={props.state.profilePage.newPostText}
                            updatePostValue={props.updatePostValue}
                        />}/>
                        <Route path='/profile' element={<Profile
                            postData={props.state.profilePage.postData}
                            addPost={props.addPost}
                            newPostText={props.state.profilePage.newPostText}
                            updatePostValue={props.updatePostValue}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            messageData={props.state.dialogPage.messageData}
                            dialogsData={props.state.dialogPage.dialogsData}
                            sendMessage={props.sendMessage}
                            friendsList={props.state.friends}
                            updateMessageValue={props.updateMessageValue}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </main>
                <AppFooter/>
            </div>
        </Router>
    );
}


export default App;

