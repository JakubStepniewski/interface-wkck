import { Link } from 'react-router-dom'
import './style/PostComments.css'
import MenuBar from './MenuBar'
import { useParams } from 'react-router-dom'
import Com from './Com'
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from './firebaseConfig'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

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

export interface comme{
  userId: string;
  id: string;
  name: string;
  comment: string;
}

interface name{
  name: string;
  userId: string;
  id: string;
}

const PostComments = () =>{

  const params = useParams()
  console.log(params);
  var imageUrl;
  var title:any;
  var profileName :string;

  const [user] = useAuthState(auth);

  const [postList, setPostList] = useState<post[] | null>(null);
  const postRef = collection(db,"posts");

  const postsDoc = query(postRef, where("__name__","==",params.id))

  const getPosts = async () =>{
    const data = await getDocs(postsDoc);
    setPostList(
        data.docs.map((doc) => ({...doc.data(), id: doc.id })) as post[]
    )
}

useEffect(() => {
    getPosts();
}, []);

postList?.map((post) => (imageUrl = post.imageUrl,
  title = post.title

  ))

console.log(imageUrl)

const commsRef = collection(db,"comments");

const [nameList, setNameList] = useState<name[] |null>(null)

const nameRef = collection(db,"names");
    const nameDoc = query(nameRef, where("userId","==",user?.uid))

    const getNames = async () =>{
        const data = await getDocs(nameDoc);
        setNameList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as name[]
        )
    }

const { register, handleSubmit} = useForm();

const [commList, setCommList] = useState<comme[] | null>(null);
    const commRef = collection(db,"comments");

    const getComms = async () =>{
        const data = await getDocs(commRef);
        setCommList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as comme[]
        );
    }

    useEffect(() => {
        getComms();
        getNames();
    }, []);

    nameList?.map((name) => (profileName = name.name),
  )

  const add = async (data: any) =>{
    console.log(data.com)
    console.log(profileName)
  
    if(data.com !=""){
      await addDoc(commsRef, {
        userId: user?.uid,
        postId: params.id,
        name: profileName,
        comment: data.com
      })
    }  
    
  }


  return (
    <div className='PostComments'>
      
        <div className='TopPostComment'>
            <Link to="/" className='BackPostComments'>
                <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'></img>
            </Link>
            <h1 className='TitlePostComment'>{title}</h1>
            <div className='AvatarDiv'>
              <div>
                <Link to="/Profile" className='Avatar'>
                 <img src='https://i.imgur.com/KIB94je.png' className='AvatarImg'></img>
               </Link>
              </div>
            </div>
        </div>
        <div className='PostCommentsAll'>
            <img src={imageUrl}className='PostCommentsImg'></img>
            <div className='PostCommenstContent'>
              {commList?.map((comme) => <Com comme={comme}/>)}
            </div>
        </div>
        <form className='PostCommentForm' onSubmit={handleSubmit(add)} >
          <input type='text' {...register("com")} className='PostCommentType'></input>
          <input type='submit' className='xdd'></input>
        </form>
        <MenuBar/>
    </div>
    
  )
}

export default PostComments
