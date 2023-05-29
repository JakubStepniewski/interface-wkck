import './style/MenuBar.css'
import MainButton from './MainButton'
import SearchButton from './SearchButton'
import Logo from './Logo'
import ForYouButton from './ForYouButton'
import Filter from './Filter'
import Add from './Add'
import Notification from './Notification'
import Message from './Message'
import Avatar from './Avatar'
import Help from './Help'

function MenuBar() {

  return (
    <div className="MenuBar">
      <Logo/>
      <SearchButton />
      <MainButton/>
      <ForYouButton/>
      <Filter/>
      <Add/>
      <Avatar/>
      <Notification/>
      <Message/>
      <Help/>
    </div>
  )
}

export default MenuBar
