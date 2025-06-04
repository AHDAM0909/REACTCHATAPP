import React from 'react'

export default function Button({text,onClick}) {
  // function clickButton(event){
  //   alert('Button Clicked')
  // }
  function onHover(event){
    //change the text
    const button = event.target;
    button.innerText ='Done'

  }
  function unHover(event){
    const button =event.target;
    button.innerText= text;
  }
  return (
    <button type ='submit'className='quiz-btn' onClick={onClick} onMouseEnter={onHover} onMouseLeave={unHover}>{text}</button>
  )
}

// export function CustomButton(){
//   return (
//     <button>My Custom Button</button>
//   )
// }