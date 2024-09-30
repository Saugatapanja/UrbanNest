import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login=async()=>{
    console.log("Login Function Executed",formData);
    let resData;
    await fetch('https://urbannest-backend-dabw.onrender.com/login',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>resData=data)
  
    if(resData.success){
      localStorage.setItem('auth-token',resData.token);
      window.location.replace("/");
    } else {
      alert(resData.errors);
    }
  }

  const signup=async()=>{
    console.log("Signup Function Executed",formData);
    let resData;
    await fetch('https://urbannest-backend-dabw.onrender.com/signup',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>resData=data)
  
    if(resData.success){
      localStorage.setItem('auth-token',resData.token);
      window.location.replace("/");
    } else {
      alert(resData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className="loginsignup-fields">
          {!isLogin && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Id' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{isLogin ? login():signup()}} className='loginsignup-button'>{isLogin ? 'Login' : 'Continue'}</button>
        <p className="loginsignup-toggle">
          {isLogin
            ? 'Don\'t have an account?'
            : 'Already have an account?'}
          <span onClick={toggleForm}>
            {isLogin ? ' Sign Up here' : ' Login here'}
          </span>
        </p>
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
