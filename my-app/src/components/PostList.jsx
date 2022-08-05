import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

const PostList = ({posts, title, remove}) => {

    if (posts.length === 0) {
        return (<h1 style={{textAlign: "center", marginTop: "15px"}}>Постов нет</h1>)
    }

    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>(
                    <CSSTransition
                        key={post.id}
                        timeout={1000}
                        classNames="post"
                    >
                        <PostItem remove={remove} num={index + 1} post={post}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
