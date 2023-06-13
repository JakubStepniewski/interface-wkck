import { Link } from 'react-router-dom'
import './style/Registration.css'
import { useState } from "react";
import LogoHome from './LogoHome';
import { useNavigate } from "react-router-dom";
import firebaseConfig, { db } from "./firebaseConfig";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { useForm } from "react-hook-form"
import { addDoc, collection } from 'firebase/firestore';

const Register = () => {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [errorMessageMail, setErrorMail ] = useState("");
  const [errorMessagePass, setErrorPass ] = useState("");

  const mameRef = collection(db,"names");
  const avatarRef = collection(db,"avatars");

  const { register, handleSubmit, formState: {}} = useForm({
  });



  const onSubmit = (data: any) =>{

    if(data.password != data.repassword){
      setErrorPass("hasła się nie zgadzają");
    }else{

      createUserWithEmailAndPassword(auth,data.email,data.password)
    .then(async (res) => {
      console.log(res.user)


      await addDoc(avatarRef, {
        avatarUrl: "https:/i.imgur.com/P7lMeq7.jpg",
        userId: res.user.uid
      })

      await addDoc(mameRef, {
        name: data.email,
        userId: res.user.uid
      })

      navigate("/Login");
    })
  .catch(err => {
  if(err.message == "Firebase: Error (auth/email-already-in-use).")
  {
    setErrorMail("Podany email jest już używany");
    console.log("siemanko"); 
  }
  else if(err.message == "Firebase: Error (auth/invalid-email)."){
    console.log("zly email");
    setErrorMail("Podany email jest błędny");
  }
  else{
    setErrorMail("");
  }
  if(err.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
    setErrorPass("hasło musi miec co najmien 6 znaków");
  }
  else{
    setErrorPass("");
  }
  

  console.log(err.message);

})
      
    }
}

  return (
    <div className='Register'>
        <div className='TopHome'>
        <LogoHome/>
          <Link to="/Login" className='LoginButton'>
            Zaloguj się
          </Link>
        </div>
        <div className='HomeContent'>
          <img src='https://i.imgur.com/g99oIrX.jpg' className='HomeImg'></img>
          <div className='RegisterRightDiv'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email")} title='siemanko' placeholder='Podaj email'></input>
                <p className='errors'>{errorMessageMail}</p>
                <input type='password' {...register("password")} placeholder='Podaj hasło'></input>
                <p className='errors'>{errorMessagePass}</p>
                <input type='password' {...register("repassword")} placeholder='Powtórz hasło'></input>
                <button type='submit' className='RegisterLink'>
                  Zarejestruj się
                </button>
            </form>
            
            
          </div>
        </div>
    </div>
  )
}

export default Register
