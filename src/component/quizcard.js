import React,{useState} from "react"
import Button from "./button"

const div_style ={
  width: '60%',
  background:'aliceblue',
  marginLeft:'20%',
  display:'flex',
  flexDirection:'column',
  paddingTop:'20px',
  paddingBottom:'25px',
  paddingLeft:'10px',
  boxShadow:'1px 1px 6px rgba(12,14,12,0.3)',
  marginBottom:"20px"
}
export default function Quizard({index, question, options}){
  let [selectedAnswer, SetSelectedAnswer] = useState(null);
  function changeSelectedAnswer(event){
    const picked_value = event.target.value;
    // proper way of updating state
    SetSelectedAnswer(picked_value);
    alert(selectedAnswer)
  }
  return(
    <div>
      <div style={div_style}>
        <span>({index})</span>
        <p>{question}</p>
        <div className="option-div">
          {
              options.map((value,index)=>{
              return <div key={index}>
                      <input type='radio' name='option'value={value} onChange={changeSelectedAnswer}></input><label>{value}</label>
                  </div>
            })
          }
          
        </div>
          <Button text='Submit'/>
      </div>    
     
    {
      selectedAnswer !== null ? <p>{selectedAnswer}</p> :<p> you have not selected any answer</p>
    }
    </div>
  )  
    
}