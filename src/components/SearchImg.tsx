import { post } from './MainPage';
import './style/SearchImg.css'

interface props{
  post: post;
}

const SearchImg = (props: props) =>{
  const {post} = props;

  return (
    <div className='SearchImgDiv'>
        <img src={post.imageUrl} className='SearchImg'></img>
    </div>
  )
}

export default SearchImg
