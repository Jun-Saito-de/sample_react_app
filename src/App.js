import './App.css'
import { useState, useEffect } from 'react'

function App(props) {

  const [input, setInput] = useState(1)
  const [message, setMessage] = useState("");
  const doInput = (event) =>{
    setInput(event.target.value)
  }
  const doClick = ()=> {
    setMessage(`こんにちは、${input}さん！`);
  }

  useEffect(()=> {
    if (input <= 0) {
      setMessage("自然数を入力してください");
      return
    }

    var prime = true
    if (input == 1) {
      prime = false
    } else {
      for (var i = 2; i <= input / 2; i++) {
        if (input % i ===0) {
          prime = false
          break
        }
      }
    } 
    setMessage(prime ? "※素数です。" : "素数ではありません。")
  }, [input]);
  

  return (
    <div className='App'>
      <h1 className={props.color}>{props.title}</h1>
      <p className={`{props.color} "clickable"`}>
        {message}
      </p>
      <div>
        <input type='number' min="1" onChange={doInput} placeholder='自然数を入力してください'/>
      </div>
    </div>
  )
}

export default App

// import './App.css'


// function Message(props) {
//   return (
//     <p className = "ClassA">{props.message}</p>
//   )
// }

// function Data(props) {
//   return (
//     <ul>
//       {props.data.map((ClipboardItem,key)=> {
//         return(<li key={key}>{item.name}</li>)
// })}
//     </ul>
//   )
// }

// function App(props){
//   const data = [
//     {name: "Taro"},
//     {name: "Hanako"},
//     {name: "Sachiko"},
//   ]

//   return (
    
//   )
// }
// export default App
