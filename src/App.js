// リスト2-13 初期値が反映されない理由不明
import './App.css'
import { useState, useEffect } from 'react'

// App関数
function App(props) {
  // nameとmailという値をもつオブジェクトの配列を用意。定数data
  const data = [
    {name:"Taro", mail:"taro@sato.com"},
    {name:"Hana", mail:"hana@kato.com"},
    {name:"Kosuke", mail:"kosuke@seto.com"},     
  ]
  return (
    <div className='App'>
      <h1>{props.title}</h1>
      {/* 定数dataの内容をリスト表示。JavaScriptで記述 */}
      <ul>
        {/* data.mapでdataの値を繰り返し表示する */}
        {/* 引数で渡されたitemには配列の各値が代入されている */}
        {data.map((item,key)=> { 
          return(
          <li>{item.name} [{item.mail}]</li>
        )
        })}
      </ul>
    </div>
  )
}

export default App
