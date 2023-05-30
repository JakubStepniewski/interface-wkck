import './style/Post.css'
import Image from './Image'
import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'
import { post } from './MainPage';

interface props{
  post: post;
}

const Post = (props: props) => {

  const {post} = props;

  return (
    <div className='Post'>
      
        <div className='Top'>
            <h1 className='Title'>{post.title}</h1>
            <div className='AvatarDiv'>
              <div>
                <Link to="/Profile" className='Avatar'>
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
              <img src='https://i.imgur.com/g9TpgYZ.png' className='LikeButtonImg' onClick={() => alert('Dałeś Like')}></img>
            </button>
          </div>
          <div>
            <Link to="/PostComments" className='CommentButton'>
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
          <p>Liczba polubień: {post.likes}</p>
        </div>
        <div className='Comments'>
          <p className='Comment'><b>{post.comm1Name} </b>{post.comm1}</p>
          <p className='Comment'><b>{post.comm2Name} </b>{post.comm2}</p>
          <Link to="/PostComments" className='Comment'>
            <p className='Comment'>Zobacz wszystkie komentarze</p>
          </Link>
        </div>
    </div>
  )
}

export default Post
