import React, { useState } from "react";
// import Gbutton,{CustomButton} from './component/button'; 
// import Quizard from './component/quizcard';
// import ScoreCard from "./component/score";
import Signup from "./component/signup";
import Login from "./component/login";
import './CSS/styles.css'
//routing in react
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chat from "./page/Chat";





// function App() {
//   return (
//     <div className="App">
      
//     <h4>welcome to react</h4>
//     <Gbutton text='Login'/>
//     <Gbutton text='Signup'/>
//     <CustomButton/>
    
//     <Quizard index={1} question="which is a protein" options={['rice', 'orange','beans','wheat']} />
//     {/* <Quizard index={2} question="which country is lagos located in?" option1="Germany" option2='India' option3='Nigeria' option4="Venuezuela"/> */}
//     <ScoreCard score={80} total={100} Comment='you did absolutely well'/> 
//     <Signup/>
//     <Login/>
//     </div>
    
  // );
// }

// export default App;
export default function App(){
  const[isAuth, setIsAuth] = useState(false);
  return(
    <Router>
      <Routes>
        <Route Component={Login} path='/'/>
        <Route Component={Login} path='/Login'/>
        <Route element={<Signup/>} path='/Signup'/> //it allow props
        <Route element={<Chat isAuth={isAuth} setIsAuth={setIsAuth}/>} path="/Chat"/>
      </Routes>
    </Router>
  )
}
