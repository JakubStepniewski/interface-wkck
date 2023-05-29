import { Link } from 'react-router-dom'
import './style/Search.css'
import SearchImg from './SearchImg'
import MenuBar from './MenuBar'

function Search() {

  return (
    <div className='Search'>
        <MenuBar/>
        <div className='SearchNav'>
            <div className='SearchBack'>
                <Link to="/" className='SearchLink'>
                    <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'></img>
                </Link>
            </div>
            <div className='SearchBar'>
                <form>
                    <input type='text' className='SearchBarInput' placeholder='Szukaj przepisów'/>
                </form>
            </div>
            <div className='SearchButton'>
                <Link to="/Search" className='SearchButtonLink'>
                    Szukaj
                </Link>
            </div>
        </div>
        <div className='SearchContent'>
            <SearchImg/>
            <SearchImg/>
            <SearchImg/>
            <SearchImg/>
            <SearchImg/>
            <SearchImg/>
        </div>
    </div>
  )
}

export default Search
