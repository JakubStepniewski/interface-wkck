import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import Chat from './components/Chat'
import Search from './components/Search'
import Adding from './components/Adding'
import Filters from './components/Filers'
import PostComments from './components/PostComments'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import MainPage from './components/MainPage'
import ForYouPage from './components/ForYouPage'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/ForYouPage' element={<ForYouPage/>}></Route>
        <Route path='/Profile/:id' element={<Profile/>}></Route>
        <Route path='/Profile/Saves' element={<Profile/>}></Route>
        <Route path='/Mess' element={<Chat/>}></Route>
        <Route path='/Search/:id' element={<Search/>}></Route>
        <Route path='/Add' element={<Adding/>}></Route>
        <Route path='/Filters' element={<Filters/>}></Route>
        <Route path='/PostComments/:id' element={<PostComments/>}></Route>
        <Route path='/Home' element={<Home name="siema"/>}></Route>
        <Route path='/Register' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

