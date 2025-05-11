import './App.css'
import { useState, useEffect } from 'react'

function App(props) {
  // const [input, setInput] = useState("")
  // const [message, setMessage] = useState("お名前は？")
  const [input, setInput] = useState(1)
  const [message, setMessage] = useState("");
  const doInput = (event) =>{
    setInput(event.target.value)
  }
  const doClick = ()=> {
    setMessage(`こんにちは、${input}さん！`);
  }

  useEffect(()=> {
    // 入力が0以下ならメッセージを入力して終了
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
  

  // const [counter, setCounter] = useState(0) // useState(0)で、初期値が0のステートが作成される。counterにはステートの値が代入され、setCounterにはステートを変更する関数が代入される  
  // const doClick = ()=> {
  //   setCounter(counter+1)
  // }
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
