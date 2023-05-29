import { Link } from 'react-router-dom'
import './style/Help.css'

function Help() {

  return (
    <div>
        <div className='Help'>
            <img src='https://i.imgur.com/Epk7MG2.png' className='MessageImg' onClick={() => alert('Wszytkie zapytania i problemy prosze kierować na adres mailowy kontakt@comayo.com')}></img>
        </div>
    </div>
  )
}

export default Help
