import './App.css'
import { useState } from 'react'

// App関数
function App(props) {
  // フィールドに入力したテキストを管理するためのもの
  const [input, setInput] = useState("") 
  // 表示するメッセージを管理するためのもの
  const [message, setMessage] = useState("お名前は？")

  // <input>のonChangeイベント用
  // doInput フィールドの値が変更されると発生 
  const doInput = (event) => {
    setInput(event.target.value)
  }
  // <button>のonClickイベント用
  // doClick ボタンをクリックした時に実行する処理  
  const doClick = ()=> {
    setMessage("こんにちは、" + input + "さん！")
  }

  // returnされるJSX内でフォームを用意
  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p className={`${props.color} clickable`}>{message}</p>
      <div>
        {/* イベント（onChange、onClick）に上述の関数を割り当て */}
        <input type='text' onChange={doInput} />
        <button onClick={doClick}>Click</button>
      </div>
    </div>
  )
}

export default App
