import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostSection from "./UserPostSection/UserPostSection";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPostSection postData={props.postData}/>
        </div>
    );
}

export default Profile;
