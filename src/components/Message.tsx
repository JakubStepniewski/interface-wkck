import { Link } from 'react-router-dom'
import './style/Message.css'

function Message() {

  return (
    <div>
        <Link to="/Mess" className='Message'>
            <img src='https://i.imgur.com/WaDI0Hu.png' className='MessageImg'></img>
        </Link>
    </div>
  )
}

export default Message
