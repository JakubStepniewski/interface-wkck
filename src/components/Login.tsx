import { Link } from 'react-router-dom'
import './style/Login.css'
import  { useState } from "react";
import LogoHome from './LogoHome';
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [errorMessage, setError ] = useState("");

  const { register, handleSubmit} = useForm();

  


  
  const onSubmit = (data:any) =>{
    signInWithEmailAndPassword(auth, data.email, data.pass)
    .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;

            

            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setError("Błędne dane logowania")
        });
  }


  return (
    <div className='Login'>
        <div className='TopHome'>
        <LogoHome/>
          <Link to="/Register" className='LoginButton'>
            Zarejestruj się
          </Link>
        </div>
        <div className='HomeContent'>
          <img src='https://i.imgur.com/g99oIrX.jpg' className='HomeImg'></img>
          <div className='LoginRightDiv'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email")} placeholder='Podaj email'></input>
                <input type='password' {...register("pass")} placeholder='Podaj hasło'></input>\
                <p className='errors'>{errorMessage}</p>
                <button type='submit' className='LoginLink' >
                Zaloguj się
                </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
