import { Link, Route, Routes } from 'react-router-dom'
import Avatar from './Avatar'
import './style/Profile.css'
import Image from './Image'
import MenuBar from './MenuBar'

function Profile() {

  return (
    <div className='Profile'>
        
        <div className='TopProfile'> 
            <div className='ProfileAvatar'>
                <img src="https://i.imgur.com/KIB94je.png" className='ProfileAvatarImg'></img>
            </div>
            <div className='Information'>
               <h1>Jakub Stępniewski</h1>
              <p>Posty: 3     obserwujących: 54     obserwowani: 43</p>
            </div>
            <div className='ProfileNav'>
                <Link to="/Profile" className='Posts'>posty</Link>
                <Link to="/Profile/Saves" className='Saves'>zapisane</Link>
            </div>
            <div className='Content'>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </div>
        </div>
        <Routes>
            <Route path='/Profile'></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
        </Routes>
        <MenuBar/>
    </div>
  )
}

export default Profile

