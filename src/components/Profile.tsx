import { Route, Routes, useParams } from 'react-router-dom'
import './style/Profile.css'
import Image from './Image'
import MenuBar from './MenuBar'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {  auth, db } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

interface avatar{
    avatarUrl: string;
    userId: string;
    id: string;
}

interface name{
    name: string;
    userId: string;
    id: string;
}

interface post{
    avatarUrl: string;
    userId: string;
    id: string;
    imageUrl: string;
    ingredients: string;
    likes: number;
    preparation: string;
    title: string;
    comm1: string;
    comm1Name: string;
    comm2: string;
    comm2Name: string;
}

function Profile() {
    var profileName = ""
    var avatarUrl = ""
    var addPhotoUrl: string | null;
    var avatarId: string;
    var newName;
    var nameId: string;
    const [user] = useAuthState(auth);

    const avatarRef = collection(db,"avatars");
    const params = useParams()
    const avatarsDoc = query(avatarRef, where("userId","==",params.id))

    const [avatarList, setAvatarList] = useState<avatar[] |null>(null)

    const getAvatars = async () =>{
        const data = await getDocs(avatarsDoc);
        setAvatarList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as avatar[]
        )
    }

    

    avatarList?.map((avatar) => (avatarUrl = avatar.avatarUrl,
        avatarId = avatar.id
        ))


    const nameRef = collection(db,"names");
    const nameDoc = query(nameRef, where("userId","==",params.id))

    const [nameList, setNameList] = useState<name[] |null>(null)

    const getNames = async () =>{
        const data = await getDocs(nameDoc);
        setNameList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as name[]
        )
    }

    const [postList, setPostList] = useState<post[] | null>(null);
    const postRef = collection(db,"posts");
    const postDoc = query(postRef, where("userId","==",params.id))

    const getPosts = async () =>{
        const data = await getDocs(postDoc);
        setPostList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id })) as post[]
        );
    }

    useEffect(() => {
        getAvatars();
        getNames();
        getPosts();
    }, []);

    nameList?.map((name) => (profileName = name.name,
        nameId = name.id),
    )

    async function addPhoto(){
        addPhotoUrl = prompt("Podaj Url zdjęcia")

        if(avatarId!= null){
            const docRef = doc(db, "avatars", avatarId);

            if(addPhotoUrl == "" || addPhotoUrl == null){

            }else{
                updateDoc(docRef, {
                    avatarUrl: addPhotoUrl,
                    userId: user?.uid
                })
            }
        
        }else{
            if(addPhotoUrl == "" || addPhotoUrl == null)
            {

            }else{
                await addDoc(avatarRef, {
                    avatarUrl: addPhotoUrl,
                    userId: user?.uid
                })
            }
            
        }  
    }

    function changeName(){
        newName = prompt("Podaj Url zdjęcia")

        const docRef = doc(db, "names", nameId);

        if(newName == "" || newName == null)
        {

        }else{
            updateDoc(docRef, {
                name: newName,
                userId: user?.uid
            })
        }

        
    }

  return (
    <div className='Profile'>
        
        <div className='TopProfile'> 
            <div className='ProfileAvatar'>
                <img src={avatarUrl} className='ProfileAvatarImg' onClick={addPhoto}></img>
            </div>
            <div className='Information'>
               <h1 onClick={changeName}>{profileName}</h1>
              <p></p>
            </div>
            <div className='ProfileNav'>
                <p className='Posts'>posty</p>
            </div>
            <div className='Content'>
                {postList?.map((post) => <Image post={post}/>)}
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

