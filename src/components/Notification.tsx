import './style/Notification.css'

function Notification() {

  return (
    <div>
        <button className='Notification'>
            <img src='https://i.imgur.com/OWGIxKO.png' className='NotImg' onClick={() => alert('Nie masz żadnych powiadomień')}></img>
        </button>
    </div>
  )
}

export default Notification
