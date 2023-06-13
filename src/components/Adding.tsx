import { Link, useNavigate } from 'react-router-dom'
import './style/Adding.css'
import MenuBar from './MenuBar'
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth"

interface avatar{
    avatarUrl: string;
    userId: string;
    id: string;
}

function Adding() {

    var prep: (string | null)[] = [];
    var ing: (string | null)[] = [];
    var addPhotoUrl: string | null;
    var title: string | null;   
    var avatarUrl: string
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const postRef = collection(db,"posts");

    function addPhoto(){
        addPhotoUrl = prompt("Podaj Url zdjęcia")
    }

    function addPrepStep(){
        var addPrep = prompt("Podaj krok")
        prep.push(addPrep)
    }

    function addIngStep(){
        var addIng = prompt("Podaj składnik")
        ing.push(addIng)
        
    }

    const handleChange = (event: { target: { value: any; }; }) => {
        title = event.target.value;
      };

    async function add(){

        let strPhotoUrl = addPhotoUrl?.toString();
        let strPrep = prep.toString();
        let strIng = ing.toString();

        /*
        console.log(strPhotoUrl)
        console.log(strPrep)
        console.log(strIng)
        console.log(user?.uid)
        console.log(avatarUrlXD)
        */

        if(strPhotoUrl != null && strPrep != "" && strIng != "" && title != null){
            await addDoc(postRef, {
                imageUrl: strPhotoUrl,
                ingredients: strIng,
                preparation: strPrep,
                likes: 0,
                title: title,
                userId: user?.uid,
                avatarUrl: avatarUrl,
                comm1: "",
                comm1Name: "",
                comm2: "",
                comm2Name: "",
            })
            navigate("/")
        }else{

        }   
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
    <div className='Adding'>
        
        <div className='SearchNav'>
            <div className='SearchBack'>
                <Link to="/" className='SearchLink' >

                    <img src='https://i.imgur.com/o6aGgFb.png' className='SearchBackImg'>
                        
                    </img>
                </Link>
            </div>
            <div className='SearchBar'>
                <form>
                    <input type='text' className='SearchBarInput' placeholder='Wpisz tytuł przepisu' onChange={handleChange}/>
                </form>
            </div>
            <div className='SearchButton' onClick={add}>
                <button className='SearchButtonLink'>
                    Dodaj
                </button>
            </div>
        </div>
        <div className='AddContent'>
            <div className='AddImage'>
                <img src='https://i.imgur.com/Ds4cHQL.png' className='AddImageBig'  onClick={addPhoto}></img>
                <p className='AddImageP'>Dodaj zdjęcie</p>
            </div>
            <div className='AddPreperation'>
                <img src='https://i.imgur.com/Ds4cHQL.png' className='AddPreperationSmall' onClick={addPrepStep}></img>
                <p className='AddPreperationP'>Dodaj krok</p>
            </div>
            <div className='AddIngredient'>
                <img src='https://i.imgur.com/Ds4cHQL.png' className='AddIngredientSmall' onClick={addIngStep}></img>
                <p className='AddIngredientP'>Dodaj składnik</p>
            </div>
        </div>
        <MenuBar/>
    </div>
  )
}

export default Adding
