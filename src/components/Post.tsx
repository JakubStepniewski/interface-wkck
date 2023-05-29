import Avatar from './Avatar'
import './style/Post.css'
import Image from './Image'
import Preparation from './Preperation'
import Ingredients from './Ingredients'
import LikeButton from './LikeButton'
import CommentButton from './CommentButton'
import ShareButton from './ShareButton'
import SaveButton from './SaveButton'
import LikesCount from './LikesCount'
import Comments from './Comments'
import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'

function Post() {

  return (
    <div className='Post'>
      
        <div className='Top'>
            <h1 className='Title'>Kotlet schabowy z ziemniakami</h1>
            <div className='AvatarDiv'>
              <Avatar/>
            </div>
        </div>
        <div className='Middle'>
            <Image/>
            <Preparation/>
            <Ingredients/>
        </div>
        <div className='Bottom'> 
            <LikeButton/>
            <CommentButton/>
            <ShareButton/>
            <div className='SaveButtonDiv'>
              <SaveButton/>
            </div>
        </div>
        <LikesCount/>
        <Comments/>

        
        <MenuBar/>
    </div>
  )
}

export default Post
