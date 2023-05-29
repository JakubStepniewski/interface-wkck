import { Link } from 'react-router-dom'
import './style/Filters.css'
import MenuBar from './MenuBar'

function Filters() {

  return (
    <div className='Filters'>
      
        <div className='Nav'>
            <div className='SearchBack'>
                <Link to="/" className='SearchLink'>
                    <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'></img>
                </Link>
            </div>
        </div>
        
        <input type='text' placeholder='Szukaj składników'></input> 
        <input type='text' placeholder='Wybierz kategorie'></input> 
        <input type='text' placeholder='Wybierz język'></input> 
        <input type='text' placeholder='Wybierz alergie'></input>
        <Link to="/Search" className='SearchButtonFilters'>
        Szukaj
        </Link>
        <MenuBar/>
    </div>
  )
}

export default Filters
