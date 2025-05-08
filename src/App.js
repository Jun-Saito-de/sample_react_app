// リスト2-13 初期値が反映されない理由不明
import './App.css'
import { useState, useEffect } from 'react'

// App関数
function App(props) {
  var [count, setCount] = useState(0)
  var [data,setData] = useState([
    {
      position: "absolute",
      left:"0px", 
      top: "0px",
      width:"100%",height:"100%",
      backgroundColor:"#fff0",
    }
  ])

  const doClick = (event)=> {
    const ob = {
      position: "absolute",
      left:(event.pageX - 50) + "px", 
      top: (event.pageY - 50) + "px",
      width:"100px",height:"100px",
      backgroundColor:"#ff000066",
      borderRadius:"50%",
    }
    data.push(ob)
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <h1>{props.title}</h1> 
      <p>{count} objects.</p>
      <div onClick={doClick}>
        {data.map((item,key)=>{
          return(<div style={item} key={key}></div>)
        })}
      </div>      
    </div>
  )
}

export default App
