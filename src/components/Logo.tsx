import { Link } from 'react-router-dom'
import './style/Logo.css'

function Logo() {

  return (
    <div>
      <Link to="/">
        <img src="https://i.imgur.com/zjjCtAc.png" className="logo" alt="Vite logo" />
      </Link>
    </div>
  )
}

export default Logo
