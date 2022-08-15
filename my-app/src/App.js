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
import {getPageCount} from "./utils/pages";
import {usePagination} from "./hooks/usePagination";


function App() {
    const [posts, setPosts] = useState([])
    // состояние для фильтрации и поиска постов(двухстороннее связывание)
    const [filter, setFilter] = useState({sort: '', query: ''})
    // состояние для модального окна(изменяем видимость)
    const [modal, setModal] = useState(false)
    // кастомный хук для сортировки и фильтрации постов
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    // создание нового поста и добавление его в массив
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(() => false)
    }
    //получаем пост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [fetchPosts, isPostLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    let pagesArray = usePagination(totalPages)

    useEffect(() => {
        fetchPosts()
    }, [page])


    return (
        <div className="App">
            <MyButton onClick={setModal}>
                Создать пост
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin: "15px 0px"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {error &&
            <h1>Произошла Ошибка {error}</h1>
            }
            {isPostLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Preloader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Все Посты"} key={posts.id}/>
            }
            <div className='pagination'>
                {pagesArray.map(p =>
                    <span
                        key={p}
                        onClick={() => setPage(p)}
                        className={page === p ? 'page_number current_page' : 'page_number'}>
                            {p}
                    </span>
                )}
            </div>
        </div>
    );
}

export default App;
