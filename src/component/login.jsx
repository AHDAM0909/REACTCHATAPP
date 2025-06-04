import React, {useState,useEffect,useRef}from "react";
import Button from "./button"
import { useNavigate,Link } from "react-router-dom";
import { loginUtils } from "../utils/api";

export default function Login(){
  const navigate= useNavigate();
  const[email, setEmail] = useState ("");
  const[password1, SetPassword1]  = useState("");
  const[error,setError] = useState(null);
   
  const textRef = useRef();

  // let time = 1

  function updateEmail(event){
    setEmail(event.target.value)
  }
  
  async function submitForm (event){
    event.preventDefault();

    // validating b4 submitting
    if(!email || !password1){
      // show error message 
      setError('one of ur required field is empty')
      return
    }
    if (password1.length < 8){
      setError('password length must be greater than 8')
      return
    }
    if (!email.endsWith(".com") && !email.endsWith(".org")){
      setError('this does not  follow a valid email')
      return
    }
    const response = await loginUtils(email,password1);
    if(response.success){
      alert("Login successful");
      sessionStorage.setItem("chat-app-user",email)

      //redirect to chat app
      navigate("/Chat");
      return;
    }else{
      setError(response.message);
      return;
    }
  } 
    
    // setError(null); 
    // // start processing email
    // alert("Login Successful...");
    // setEmail("");
    // SetPassword1("");
    // // redirect them to homepage if successful
  // useEffect(()=>{
  //   console.log("LOGIN Component has mount on the page ")
    

  //   const id_interval= setInterval (()=>{
  //     console.log('Timer Running' + time)
  //     time++;
  //   },2000)
  //   return()=>{
  //     // here u write code for unmounting
  //     // alert ("Cleaning up any memory useage b4 unmounting this component");
  //     clearInterval(id_interval);
  //     console.log("Cleared Interval b4 leaving the page"); 
  //   }
  // },[])

  // useEffect(()=>{
  //   console.log("LOGIN Component has mount on the page ")
  //   if(textRef.current){
  //     const password_field= textRef.current;
  //     password_field.style.background="green";
  //     console.log(password_field)
  //   }
  // },[email,password1]) 

  return(
    <div>
      <h3>Login</h3>
      <div>
        <strong>{error}</strong>
      </div>
      <form action="">
        <label>Email</label>
        <input type="email" name="email" id="email" value={email} onInput={updateEmail}/>
        <label>Password</label>
        <input type="password" name="password" id="password" value={password1} onInput={(event)=> SetPassword1(event.target.value)}/>
        <Button text='Login' onClick={submitForm}/>
        <div>
          <p>Dont have an account</p><Link to="/Signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}