import { Link } from 'react-router-dom'
import './style/PostComments.css'
import MenuBar from './MenuBar'

function PostComments() {

  return (
    <div className='PostComments'>
      
        <div className='TopPostComment'>
            <Link to="/" className='BackPostComments'>
                <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'></img>
            </Link>
            <h1 className='TitlePostComment'>Kotlet schabowy z ziemniakami</h1>
            <div className='AvatarDiv'>
              <div>
                <Link to="/Profile" className='Avatar'>
                 <img src='https://i.imgur.com/KIB94je.png' className='AvatarImg'></img>
               </Link>
              </div>
            </div>
        </div>
        <div className='PostCommentsAll'>
            <img src='https://i.imgur.com/2hID20a.jpg'className='PostCommentsImg'></img>
            <div className='PostCommenstContent'>
                <p className='PostCommentsP'><b>Piotr Wieczorek </b>Bardzo dobry obiadek</p>
                <p className='PostCommentsP'><b>Piotr Wieczorek </b>Bardzo dobry obiadek</p>
                <p className='PostCommentsP'><b>Piotr Wieczorek </b>Bardzo dobry obiadek</p>
            </div>
        </div>
        <input type='text' className='PostCommentType'></input>
        <MenuBar/>
    </div>
    
  )
}

export default PostComments
