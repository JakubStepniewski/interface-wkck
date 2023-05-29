import { Link } from 'react-router-dom'
import './style/Filter.css'

function Filter() {

  return (
    <div>
        <Link to="/Filters" className='Filter'>
          Filtry
        </Link>
    </div>
  )
}

export default Filter
