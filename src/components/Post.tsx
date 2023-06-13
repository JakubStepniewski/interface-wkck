import './style/Post.css'
import { Link } from 'react-router-dom'
import { post } from './MainPage';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

interface props{
  post: post;
}

interface like{
  userId: string;
  postId: string;
  id: string;
}

const Post = (props: props) => {

  const {post} = props;
  const postAdress = "/PostComments/" + post.id
  const profileAdress = "/Profile/" + post.userId

  var myLike ="";
  var likeAmount=0;

  const postLikes = collection(db,"likes");
  
  const [user] = useAuthState(auth);

  const [postList, setPostList] = useState<like[] | null>(null);
  const postsDoc = query(postLikes, where("userId","==",user?.uid), where("postId","==",post.id))


  const postsLikes = query(postLikes, where("postId","==",post.id))

  const getPosts = async () =>{
    const data = await getDocs(postsDoc);
    setPostList(
        data.docs.map((doc) => ({...doc.data(), id: doc.id })) as like[]
    )
}

const [likeList, setLikeList] = useState<like[] | null>(null);
const getLikeAmount = async () =>{
  const data = await getDocs(postsLikes);
  setLikeList(
      data.docs.map((doc) => ({...doc.data(), id: doc.id })) as like[]
  )
}

useEffect(() => {
    getPosts();
    getLikeAmount();
}, []);

postList?.map((like) => (myLike = like.userId))

likeList?.map(() => (likeAmount += 1))
 
async function addLike(){
  console.log("siema")
  await addDoc(postLikes, {
    userId: user?.uid,
    postId: post.id
})
  const docRef = doc(db, "posts", post.id);

  updateDoc(docRef, {
  likes: likeAmount+1,
  userId: user?.uid
})

}

function addLike1(){
  console.log(myLike)
  if(myLike == null || myLike == ""){
    addLike()
  }
}
  

  return (
    <div className='Post'>
      
        <div className='Top'>
            <h1 className='Title'>{post.title}</h1>
            <div className='AvatarDiv'>
              <div>
                <Link to={profileAdress} className='Avatar'>
                  <img src={post.avatarUrl} className='AvatarImg'></img>
                </Link>
              </div>
            </div>
        </div>
        <div className='Middle'>
            <div className='Image'>
              <img src={post.imageUrl} className='PostImg'></img>
            </div>
            <div className='Preparation'>
              <h2>Przygotowanie</h2>
                <p>
                  {post.preparation}
                </p>
            </div>
            <div className='Ingredients'>
            <h2>Składniki</h2>
            <p>
            {post.ingredients}
            </p>
            </div>
        </div>
        <div className='Bottom'> 
          <div>
            <button className='LikeButton'>
              <img src='https://i.imgur.com/g9TpgYZ.png' className='LikeButtonImg' onClick={addLike1}></img>
            </button>
          </div>
          <div>

            <Link to={postAdress} className='CommentButton'>
              <img src='https://i.imgur.com/IxYi7ez.png' className='CommentButtonImg'></img>
            </Link>
          </div>
          <div>
            <button className='ShareButton'>
              <img src='https://i.imgur.com/a2BiFEP.png' className='ShareButtonImg' onClick={() => alert('Udostępnij')}></img>
            </button>
          </div>
            <div className='SaveButtonDiv'>
              <div>
                <button className='SaveButton'>
                  <img src='https://i.imgur.com/leUjvpT.png' className='SaveButtonImg' onClick={() => alert('Zapisałeś posta')}></img>
                </button>
              </div>
            </div>
        </div>
        <div className='LikesCount'>
          <p>Liczba polubień: {likeAmount}</p>
        </div>
        <div className='Comments'>
          <p className='Comment'><b>{post.comm1Name} </b>{post.comm1}</p>
          <p className='Comment'><b>{post.comm2Name} </b>{post.comm2}</p>
          <Link to={postAdress} className='Comment'>
            <p className='Comment'>Zobacz wszystkie komentarze</p>
          </Link>
        </div>
    </div>
  )
}

export default Post
