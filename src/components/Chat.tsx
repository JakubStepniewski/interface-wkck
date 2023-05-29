import { Link } from 'react-router-dom'
import './style/Chat.css'
import Image from './Image'
import Chatter from './Chatter'
import MyMessage from './MyMessage'
import Message from './Message'
import YourMessage from './YourMessage'
import MenuBar from './MenuBar'

function Chat() {

  return (
    <div className='Chat'>
        <MenuBar/>
        <div className='Chatters'>
            <Chatter/>
            <Chatter/>
            <Chatter/>
            <Chatter/>
            <Chatter/>
            <Chatter/>
            <Chatter/>
            <Chatter/>
        </div>
        <div className='Messages'>
            <div className='SendMessages'>
                <MyMessage />
                <YourMessage/>
            </div>
            <div className='TypeMessage'>
                <form>
                    <input type='text' className='TypeMessageInput'>
                    </input>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Chat
