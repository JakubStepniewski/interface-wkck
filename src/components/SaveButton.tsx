import './style/SaveButton.css'

function SaveButton() {

  return (
    <div>
        <button className='SaveButton'>
            <img src='https://i.imgur.com/leUjvpT.png' className='SaveButtonImg' onClick={() => alert('Zapisałeś posta')}></img>
        </button>
    </div>
  )
}

export default SaveButton

