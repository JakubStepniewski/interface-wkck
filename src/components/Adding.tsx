import { Link } from 'react-router-dom'
import './style/Adding.css'
import MenuBar from './MenuBar'

function Adding() {

  return (
    <div className='Adding'>
        
        <div className='SearchNav'>
            <div className='SearchBack'>
                <Link to="/" className='SearchLink'>

                    <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'>
                        
                    </img>
                </Link>
            </div>
            <div className='SearchBar'>
                <form>
                    <input type='text' className='SearchBarInput'/>
                </form>
            </div>
            <div className='SearchButton'>
                <Link to="/Search" className='SearchButtonLink'>
                    Dodaj
                </Link>
            </div>
        </div>
        <div className='AddContent'>
            <div className='AddImage'>
                <img src='https://i.imgur.com/Ds4cHQL.png' className='AddImageBig'  onClick={() => alert('Dodaj zdjęcie')}></img>
                <p className='AddImageP'>Dodaj zdjęcie</p>
            </div>
            <div className='AddPreperation'>
                <img src='https://i.imgur.com/Ds4cHQL.png' className='AddPreperationSmall' onClick={() => alert('Dodaj krok')}></img>
                <p className='AddPreperationP'>Dodaj krok</p>
            </div>
            <div className='AddIngredient'>
                <img src='https://i.imgur.com/Ds4cHQL.png' className='AddIngredientSmall' onClick={() => alert('Dodaj składnik')}></img>
                <p className='AddIngredientP'>Dodaj składnik</p>
            </div>
        </div>
        <MenuBar/>
    </div>
  )
}

export default Adding
