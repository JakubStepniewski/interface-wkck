import './style/MainPage.css'
import Post from './Post'
import MenuBar from './MenuBar'
import {getDocs, collection, query, orderBy} from "firebase/firestore"
import {db} from "./firebaseConfig"
import { useEffect, useState } from 'react'

export interface post{
    avatarUrl: string;
    userId: string;
    id: string;
    imageUrl: string;
    ingredients: string;
    likes: number;
    preparation: string;
    title: string;
    comm1: string;
    comm1Name: string;
    comm2: string;
    comm2Name: string;
}

const ForYouPage = () => {

    const [postList, setPostList] = useState<post[] | null>(null);
    const postRef = collection(db,"posts");

    const q = query(postRef, orderBy("likes", "desc"));

    const getPosts = async () =>{
        const data = await getDocs(q);
        setPostList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as post[]
        );
    }

    useEffect(() => {
        getPosts();
    }, []);

  return (
    <div className='MainPage'>
        
        {postList?.map((post) => <Post post={post}/>)}



        <div className='menu'>
            <MenuBar/>
        </div>
    </div>
  )
}

export default ForYouPage
