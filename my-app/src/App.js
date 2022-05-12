import React from "react";
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AppNavigation from "./components/AppNavigation/AppNavigation";
import Profile from "./components/Profile/Profile";
import AppFooter from "./components/AppFooter/AppFooter";


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
