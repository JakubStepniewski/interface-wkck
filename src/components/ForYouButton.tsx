import { Link } from 'react-router-dom'
import './style/ForYouButton.css'

function ForYouButton() {

  return (
    <div>
        <Link to="/" className='ForYouButton'>
          Polecane
        </Link>
    </div>
  )
}

export default ForYouButton
