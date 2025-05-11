// 2-3
import './App.css'
import { useState, useEffect } from 'react'

function App(props){
  var [flag, setFlag] = useState(true)
  const doClick = (event) => {
    setFlag(!flag)
  }

  return (
    <div className='App'>
      <h1 className={flag ? "TitleA" : "TitleB"}>{props.title}</h1>
      <p className={flag ? "ClassB" : "ClassA"}>{flag ? "HOME" : "AWAY"}</p>
      <button className='button' onClick={doClick}>切り替え</button>
    </div>
  )
}
export default App
