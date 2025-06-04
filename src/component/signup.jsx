import React,{useState} from "react";
import Button from "./button"
import {useNavigate, Link } from "react-router-dom";
import { SignupUtils } from "../utils/api"; 

export default function Signup(){
    const navigate = useNavigate();
    const [email, SetEmail] = useState("");
    const [password1, SetPassword1] = useState("");
    const [password2, SetPassword2] = useState("");
    const [error, setError] = useState(null);
    function updateEmail(event){
      SetEmail(event.target.value)
    }
    async function submitForm(event){
      event.preventDefault();
      // validate b4 submitting
      if (!password1 || !password2 || !email){
        // show error message or use alert to show error message
        setError('One or more of your required field is empty')
        return
      }
      if (!email.endsWith(".com") && !email.endsWith(".org")){
        // show error message or use alert to show error message
        setError('this does not follow a valid email pattern ')
        return
      }
      if(password1.length < 8){
        //show error message or use alert to show error message
        setError('password length must be greater than 8')
        return
      }
      if(password1 !== password2){
        // show error message or use alert to show error message
        setError('both password do not match')
        return
      }
      
  
      const response  = await SignupUtils(email,password1);
      console.log(response);
      if (response.success){
        // start error message or use alert to show error message
        alert('submting your details ....');
        // redirect them to login if signup was successful 
        navigate("/Login");
      } else {
        setError(response.message)
        return
      }
      setError(null);
      // start processing the email
      alert(" sign up successfull .... Submittin your details ")
      SetEmail("")
      SetPassword1("")
      SetPassword2("")
      // redirect them to login if signup was successfull
  }  
  return (
      <div >
        <h2>Sign UP</h2>
        <div>
          <p>{error}</p>
        </div>
        <form action="">
          <label>Email</label>
          <input type="email" value={email} name="email" id="email" onInput={updateEmail}/>
          <label>Password</label>
          <input type="password" value={password1} name="password1"onInput={(event)=>SetPassword1(event.target.value)} />
          <label>Confirm Password</label>
          <input type="password" value={password2} name="password2" onInput={(event)=>SetPassword2(event.target.value)}/>
          <Button text='Signup' onClick={submitForm}/>
          <div>
            <p>Already have an account</p><Link to="/Login">Login</Link>
          </div>
        </form>
          
      </div>
  );
}
