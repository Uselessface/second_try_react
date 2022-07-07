import "./styles/App.css"
import React, {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import MyButton from "./components/UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "description"},
        {id: 2, title: "Pyton", body: "inscription"},
        {id: 3, title: "Java", body: "transcription"}
    ])
    // состояние для фильтрации и поиска постов(двухстороннее связывание)
    const [filter, setFilter] = useState({sort: '', query: ''})

    // состояние для модального окна(изменяем видимость)
    const [modal, setModal] = useState(false)

    // возвращаем отсортированный массив
    const sortedPost = useMemo(() => {
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
        setModal(() => false)
    }
    //получаем пост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton onClick={setModal}>
                Создать пост
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>
            <hr style={{margin: "15px 0px"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про ujdyj"} key={posts.id}/>

        </div>
    );
}

export default App;
