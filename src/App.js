import './App.css'
import { useState } from 'react'

// App関数
function App(props) {
    // カウンターをステートで管理 初期値は0
  const [counter, setCounter] = useState(0)
   // カウンターを増やす関数
  const doClick = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      {/* クラス名をテンプレートリテラルで連結し、クリック時にカウンターを増やす */}
      <p className={`${props.color} clickable`}
        onClick={doClick}>counter: {counter}.</p>
    </div>
  )
}

export default App
