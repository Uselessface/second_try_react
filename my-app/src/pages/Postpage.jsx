import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Preloader from "../components/UI/Preloader/Preloader";

const Postpage = () => {
    const  params = useParams();
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async () =>{
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    useEffect( () => {
        fetchPostById(params.id)
    }, [])
    return (
        <div>
            <h1>Страница поста {params.id}</h1>
            {
                isLoading ? <Preloader/> : <div> {post.id} {post.title} {post.body}</div>
            }

        </div>
    );
};

export default Postpage;
