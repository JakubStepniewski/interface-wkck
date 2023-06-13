import { useAuthState } from 'react-firebase-hooks/auth';
import './style/MenuBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from './firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface avatar{
  avatarUrl: string;
  userId: string;
  id: string;
}

function MenuBar() {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const profileAdress = "/Profile/" + user?.uid
  var search;
  var searchAdress: any;
  var avatarUrl: any

  const handleChange = (event: { target: { value: any; }; }) => {
    search = event.target.value;
    searchAdress = "/Search/" + search; 
    console.log(searchAdress)
  };

  const click = () =>{
    navigate(searchAdress);
  }

  const avatarRef = collection(db,"avatars");

    console.log(user?.uid)
    const avatarsDoc = query(avatarRef, where("userId","==",user?.uid))

    const [avatarList, setAvatarList] = useState<avatar[] |null>(null)

    const getPosts = async () =>{
        const data = await getDocs(avatarsDoc);
        setAvatarList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as avatar[]
        )
    }

    useEffect(() => {
        getPosts();
    }, []);

    avatarList?.map((avatar) => (avatarUrl = avatar.avatarUrl))

  return (
    <div className="MenuBar">
      <div>
        <Link to="/">
          <img src="https://i.imgur.com/zjjCtAc.png" className="logo"/>
        </Link>
      </div>
      <div>
        <button className='searchButton'>
          <img src="https://i.imgur.com/IEwpxAU.png" className="LogoSearch" alt="lupa" onClick={click}/>
        </button>
        <form>
          <input type="text" className="search" placeholder="Szukaj przepisów" onChange={handleChange}></input>
        </form>
      </div>
      <div>
        <Link to='/' className='MainButton'>
          Główna
        </Link>
      </div>
      <div>
        <Link to="/ForYouPage" className='ForYouButton'>
          Polecane
        </Link>
      </div>
      <div>
        <Link to="/Filters" className='Filter'>
          Filtry
        </Link>
      </div>
      <div>
        <Link to="/Add" className='Add'>
          Dodaj
        </Link>
      </div>
      <div>
        <Link to={profileAdress} className='Avatar'>
            <img src={avatarUrl} className='AvatarImg'></img>
        </Link>
      </div>
      <div>
        <button className='Notification'>
            <img src='https://i.imgur.com/OWGIxKO.png' className='NotImg' onClick={() => alert('Nie masz żadnych powiadomień')}></img>
        </button>
      </div>
      <div>
        <Link to="/Mess" className='Message'>
          <img src='https://i.imgur.com/WaDI0Hu.png' className='MessageImg'></img>
        </Link>
      </div>
      <div>
        <div className='Help'>
            <img src='https://i.imgur.com/Epk7MG2.png' className='MessageImg' onClick={() => alert('Wszytkie zapytania i problemy prosze kierować na adres mailowy kontakt@comayo.com')}></img>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
