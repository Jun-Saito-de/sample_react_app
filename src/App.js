// 2-3
import './App.css'
import { useState, useEffect } from 'react'

function App(props){
  const data = [
    {name: "Akari", mail: "akari@sky.com"},
    {name: "Hanako", mail: "hana@nagoya.com"},
    {name: "Sachiko", mail: "sacchie@osaka.com"},
  ]

  return (
    <div className='App'>
      <h1 className={props.color}>{props.title}</h1>
      <ul>
        {data.map((item,key)=>{
          return(<li className='ClassA'>{item.name} [{item.mail}]</li>)
        })}
      </ul>
    </div>
  )
}
export default App
