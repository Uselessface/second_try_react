import "./styles/App.css"
import React, {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "description"},
        {id: 2, title: "Pyton", body: "inscription"},
        {id: 3, title: "Java", body: "transcription"}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    // возвращаем отсортированный массив
    const sortedPost = useMemo(() => {
            console.log("ФУНКЦИЯ ОТРАБОТАЛА")
            if (filter.sort) {
                return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
            } else {
                return posts;
            }
        }
        , [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [
        filter.query, sortedPost
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    //получаем пост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0px"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {/*Условная отрисовка*/}
            {sortedAndSearchedPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"} key={posts.id}/>
                : <h1 style={{textAlign: "center", marginTop: "15px"}}>Постов нет</h1>
            }
        </div>
    );
}

export default App;
