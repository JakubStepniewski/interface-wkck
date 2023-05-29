import { Link } from 'react-router-dom'
import './style/Avatar.css'

function Avatar() {

  return (
    <div>
        <Link to="/Profile" className='Avatar'>
            <img src='https://i.imgur.com/KIB94je.png' className='AvatarImg'></img>
        </Link>
    </div>
  )
}

export default Avatar
