import { Link } from 'react-router-dom'
import './style/SearchButton.css'

function SearchButton() {

  return (
    <div>
      <Link to="/Search">
        <img src="https://i.imgur.com/IEwpxAU.png" className="LogoSearch" alt="lupa" />
      </Link>
        <form>
            <input type="text" className="search" placeholder="Szukaj przepisów"></input>
        </form>
    </div>
  )
}

export default SearchButton
