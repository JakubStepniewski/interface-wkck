import { Link, useNavigate, useParams } from 'react-router-dom'
import './style/Search.css'
import SearchImg from './SearchImg'
import MenuBar from './MenuBar'
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

interface post{
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

function Search() {

    const navigate = useNavigate();
    const params = useParams()
    const [postList, setPostList] = useState<post[] | null>(null);
    const postRef = collection(db,"posts");
    var title: any;
    const postDoc = query(postRef, where("title",">=",params.id),where("title","<=",params.id + '\uf8ff'))

    const getPosts = async () =>{
        const data = await getDocs(postDoc);
        setPostList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as post[]
        );
    }

    const handleChange = (event: { target: { value: any; }; }) => {
        title = event.target.value;
      };

      const click = () => {
        navigate("/Search/" + title)
      };


    useEffect(() => {
        getPosts();
    }, []);

  return (
    <div className='Search'>
        <MenuBar/>
        <div className='SearchNav'>
            <div className='SearchBack'>
                <Link to="/" className='SearchLink'>
                    <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'></img>
                </Link>
            </div>
            <div className='SearchBar'>
                <form>
                    <input onChange={handleChange} type='text' className='SearchBarInput' placeholder='Szukaj przepisów'/>
                </form>
            </div>
            <div className='SearchButton'>
                <button className='SearchButtonLink' onClick={click}>
                    Szukaj
                </button>
            </div>
        </div>
        <div className='SearchContent'>
        {postList?.map((post) => <SearchImg post={post}/>)}
        </div>
    </div>
  )
}

export default Search
