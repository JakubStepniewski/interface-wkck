import './style/MenuBar.css'
import { Link } from 'react-router-dom'

function MenuBar() {

  return (
    <div className="MenuBar">
      <div>
        <Link to="/">
          <img src="https://i.imgur.com/zjjCtAc.png" className="logo"/>
        </Link>
      </div>
      <div>
        <Link to="/Search">
          <img src="https://i.imgur.com/IEwpxAU.png" className="LogoSearch" alt="lupa" />
        </Link>
        <form>
          <input type="text" className="search" placeholder="Szukaj przepisów"></input>
        </form>
      </div>
      <div>
        <Link to='/' className='MainButton'>
          Główna
        </Link>
      </div>
      <div>
        <Link to="/" className='ForYouButton'>
          Polecane
        </Link>
      </div>
      <div>
        <Link to="/Filters" className='Filter'>
          Filtry
        </Link>
      </div>
      <div>
        <Link to="/Add" className='Add'>
          Dodaj
        </Link>
      </div>
      <div>
        <Link to="/Profile" className='Avatar'>
            <img src='https://i.imgur.com/KIB94je.png' className='AvatarImg'></img>
        </Link>
      </div>
      <div>
        <button className='Notification'>
            <img src='https://i.imgur.com/OWGIxKO.png' className='NotImg' onClick={() => alert('Nie masz żadnych powiadomień')}></img>
        </button>
      </div>
      <div>
        <Link to="/Mess" className='Message'>
          <img src='https://i.imgur.com/WaDI0Hu.png' className='MessageImg'></img>
        </Link>
      </div>
      <div>
        <div className='Help'>
            <img src='https://i.imgur.com/Epk7MG2.png' className='MessageImg' onClick={() => alert('Wszytkie zapytania i problemy prosze kierować na adres mailowy kontakt@comayo.com')}></img>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
