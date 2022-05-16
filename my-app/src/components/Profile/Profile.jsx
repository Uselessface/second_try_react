import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostSection from "./UserPostSection/UserPostSection";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <UserPostSection/>
        </div>
    );
}

export default Profile;