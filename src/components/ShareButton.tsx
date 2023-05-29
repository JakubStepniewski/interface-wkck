import './style/ShareButton.css'

function ShareButton() {

  return (
    <div>
        <button className='ShareButton'>
            <img src='https://i.imgur.com/a2BiFEP.png' className='ShareButtonImg' onClick={() => alert('Udostępnij')}></img>
        </button>
    </div>
  )
}

export default ShareButton

