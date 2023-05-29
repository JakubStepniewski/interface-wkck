import './style/LikeButton.css'

function LikeButton() {

  return (
    <div>
        <button className='LikeButton'>
            <img src='https://i.imgur.com/g9TpgYZ.png' className='LikeButtonImg' onClick={() => alert('Dałeś Like')}></img>
        </button>
    </div>
  )
}

export default LikeButton
