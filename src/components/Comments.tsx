import { Link } from 'react-router-dom'
import './style/Comments.css'
import MenuBar from './MenuBar'

function Comments() {

  return (
    <div className='Comments'>
      
        <p className='Comment'><b>Piotr Wieczorek </b>Bardzo dobry obiadek</p>
        <p className='Comment'><b>Piotr Wieczorek </b>Bardzo dobry obiadek</p>
        <Link to="/PostComments" className='Comment'>
           <p className='Comment'>Zobacz wszystkie komentarze</p>
        </Link>
    </div>
  )
}

export default Comments
