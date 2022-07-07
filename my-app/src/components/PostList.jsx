import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
        return ( <h1 style={{textAlign: "center", marginTop: "15px"}}>Постов нет</h1>)
    }

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {posts.map((post, index) =>
                    <PostItem remove={remove} num={index + 1} post={post} key={post.id}/>
                )}
            </div>
        </div>
    );
};

export default PostList;
