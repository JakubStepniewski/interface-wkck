import { Link } from 'react-router-dom'
import './style/CommentButton.css'

function CommentButton() {

  return (
    <div>
        <Link to="/PostComments" className='CommentButton'>
            <img src='https://i.imgur.com/IxYi7ez.png' className='CommentButtonImg'></img>
        </Link>
    </div>
  )
}

export default CommentButton
