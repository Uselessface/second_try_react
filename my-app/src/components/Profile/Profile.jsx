import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostSection from "./UserPostSection/UserPostSection";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPostSection postData={props.postData} addPost={props.addPost} newPostText={props.newPostText} updatePostValue={props.updatePostValue}/>
        </div>
    );
}

export default Profile;
