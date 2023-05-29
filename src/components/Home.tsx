import { Link } from 'react-router-dom'
import './style/Home.css'
import Logo from './Logo'
import React, { useEffect, useState } from "react";
import LogoHome from './LogoHome';

const Home = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>{


  return (
    <div className='Home'>
        <div className='TopHome'>
          <LogoHome/>
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
