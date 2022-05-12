import React from "react";
import NavList from "./AppNavigation.module.css";

const AppNavigation = () =>{
    return(
        <nav className={NavList.appNav}>
            <ul className={NavList.list}>
                <li className={NavList.item}><span><img src="https://icon-library.com/images/android-style-icon/android-style-icon-20.jpg" alt="list_icon" className={NavList.navigationIcon}/></span><a className={NavList.link} href="#s"> Profile</a></li>
                <li className={NavList.item}><span><img src="https://icon-library.com/images/android-style-icon/android-style-icon-20.jpg" alt="list_icon" className={NavList.navigationIcon}/></span><a className={NavList.link} href="#s">Messages </a></li>
                <li className={NavList.item}><span><img src="https://icon-library.com/images/android-style-icon/android-style-icon-20.jpg" alt="list_icon" className={NavList.navigationIcon}/></span><a className={NavList.link} href="#s">News</a></li>
                <li className={NavList.item}><span><img src="https://icon-library.com/images/android-style-icon/android-style-icon-20.jpg" alt="list_icon" className={NavList.navigationIcon}/></span><a className={NavList.link} href="#s">Music</a></li>
                <li className={NavList.item}><span><img src="https://icon-library.com/images/android-style-icon/android-style-icon-20.jpg" alt="list_icon" className={NavList.navigationIcon}/></span><a className={NavList.link} href="#s">Settings</a></li>
            </ul>
        </nav>
    );
}

export default AppNavigation;