import { post } from './MainPage';
import './style/Image.css'

interface props{
  post: post;
}

const Image = (props: props) =>{
  const {post} = props;

  return (
    <div className='Image'>
        <img src={post.imageUrl} className='PostImg'></img>
    </div>
  )
}

export default Image
