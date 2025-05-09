// リスト2-19
// 複数コンポーネントの利用

import './App.css'
import { useState, useEffect } from 'react'
// App.cssをインポートして適用

// Messageというコンポーネントを関数として定義
// 引数に渡されるpropsからmessageのプロパティを取り出し、cssでスタイル定義されたClassAのスタイル指定で返す
function Message(props) {
  return (
    // ClassAクラスを適用して、props.messageを表示するコンポーネント
    <p className='ClassA'>{props.message}</p>
  )
}

// データというコンポーネント
function Data(props) {
  return (
    <ul>
      {props.data.map((item,key)=> {
        // data配列の要素を順次リスト項目（li）として返す
        return(<li key={key}>{item.name}</li>)
      })}
    </ul>
  )
}

// Appというコンポーネント
function App(props) {
  // data配列を定義し、名前オブジェクトを保持
  const data = [
    {name: "Naoto"},
    {name: "Aoi"},
    {name: "Sumire"},
  ]


  // コンポーネントの描画内容を定義
  return(
    <div className='App'>
      {/* props.titleをClassBクラスで表示 */}
      <h1 className='ClassB'>{props.title}</h1>
      {/* Messageコンポーネントにmessageを渡して表示 */}      
      <Message message="This is sample message!"/>
      ß{/* Dataコンポーネントにdata配列を渡して表示 */}
      <Data data = {data} />
    </div>
  )
}

export default App
