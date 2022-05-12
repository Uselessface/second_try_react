import React from "react";
import './App.css';
import AppHeader from "./components/AppHeader";
import AppNavigation from "./components/AppNavigation";
import Profile from "./components/Profile";
import AppFooter from "./components/AppFooter";


function App() {
  return (
    <div className={'wrapper'}>
        <AppHeader />
        <AppNavigation />
        <main className={'app_main_content'}>
            <Profile />
        </main>
        <AppFooter />
    </div>
  );
}


export default App;
