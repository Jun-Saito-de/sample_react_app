// リスト2-13 初期値が反映されない理由不明
import './App.css'
import { useState, useEffect } from 'react'

// App関数
function App(props) {
  var [flag,setFlag] = useState(true) // クラスAとクラスBを切り替えるためのboolean値（true / false）を保管するステート（flag）
  const doClick = (event)=> { // クリックするたびにsetFlagが切り替わる（現在のフラグ値を反転(!flag)させることでオンオフを切り替える）
    setFlag(!flag)
  }

  return (
    <div className='App'>
      {/* propsで渡されたタイトル */}
      <h1>{props.title}</h1> 
      {/* クラス名と表示テキストをflagの値で切り替える */}
      <p className={flag ? "ClassA" : "ClassB"}>{flag ? "ON" : "OFF"} です。</p>
      {/* onClickの処理内容はdoClick（上で定義） */}
      <button className='button' onClick={doClick}>クリック！</button>
      
    </div>
  )
}

export default App
