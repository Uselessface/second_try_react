import "./styles/App.css"
import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import Preloader from "./components/UI/Preloader/Preloader";
import {useFetching} from "./hooks/useFetching";


function App() {
    const [posts, setPosts] = useState([])
    // состояние для фильтрации и поиска постов(двухстороннее связывание)
    const [filter, setFilter] = useState({sort: '', query: ''})
    // состояние для модального окна(изменяем видимость)
    const [modal, setModal] = useState(false)
    // кастомный хук для сортировки и фильтрации постов
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    // создание нового поста и добавление его в массив
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(() => false)
    }
    //получаем пост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [fetchPosts, isPostLoading, error] = useFetching( async () =>{
        const posts= await PostService.getAll();
        setPosts(posts)
    })
    useEffect(()=> {
        fetchPosts()
    }, [ ])



    return (
        <div className="App">
            <MyButton onClick={fetchPosts} >GEt Posts</MyButton>
            <MyButton onClick={setModal}>
                Создать пост
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>
            <hr style={{margin: "15px 0px"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostLoading
                ?<div style={{display: "flex" , justifyContent:"center"}}><Preloader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Все Посты"} key={posts.id}/>
            }
        </div>
    );
}

export default App;
