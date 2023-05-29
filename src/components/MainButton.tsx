import { Link } from 'react-router-dom'
import './style/MainButton.css'

function MainButton() {

  return (
    <div>
        <Link to='/' className='MainButton'>
          Główna
        </Link>
    </div>
  )
}

export default MainButton
