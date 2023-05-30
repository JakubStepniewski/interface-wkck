import { Link } from 'react-router-dom'
import './style/Home.css'


const Home = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>{


  return (
    <div className='Home'>
        <div className='TopHome'>
        <div>
          <Link to="/Home">
            <img src="https://i.imgur.com/zjjCtAc.png" className="logo" alt="Vite logo" />
          </Link>
        </div>
          <Link to="/Login" className='LoginButton'>
            Zaloguj się
          </Link>
        </div>
        <div className='HomeContent'>
          <img src='https://i.imgur.com/g99oIrX.jpg' className='HomeImg'></img>
          <div className='HomeRightDiv'>
            <p> {props.name} Wejdź do świata<br></br>przepisów</p>
            <Link to="/Register" className='HomeLink'>
              Zarejestruj się
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home
