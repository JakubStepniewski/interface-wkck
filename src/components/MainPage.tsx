import './style/MainPage.css'
import Post from './Post'
import MenuBar from './MenuBar'
import {getDocs, collection} from "firebase/firestore"
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

const MainPage = () => {

    const [postList, setPostList] = useState<post[] | null>(null);
    const postRef = collection(db,"posts");

    const getPosts = async () =>{
        const data = await getDocs(postRef);
        setPostList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as post[]
        );
    }

    useEffect(() => {
        getPosts();
    }, []);

    getPosts();

  return (
    <div className='MainPage'>
        
        {postList?.map((post) => <Post post={post}/>)}



        <div className='menu'>
            <MenuBar/>
        </div>
    </div>
  )
}

export default MainPage
