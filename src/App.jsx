import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0);
  useEffect(()=>{
    let id;
    if(isRunning){
      id=setInterval(()=>{
        setTime(pt=>pt+1);
      },10)
    }
    return ()=>clearInterval(id);
  },[isRunning])

  const startStop=()=>{
    setIsRunning(!isRunning);
  }
  const reSet=()=>{
    setIsRunning(false);
    setTime(0)
  }
  const formate=()=>{
    let cs = ('1'+(time)).slice(-2);
    let sec =('0'+Math.floor(time/100)%60).slice(-2)
    let min =('0'+Math.floor(time/6000)%60).slice(-2)
    let hour=('0'+Math.floor(time/360000)%24).slice(-2);

    return `${hour}:${min}:${sec}:${cs}`;
  }
  return (
    <div className="App">
      <div>       
          <img src={viteLogo} className="logo" alt="Vite logo" />       
          <img src={reactLogo} className="logo react" alt="React logo" />     
      </div>
      <div className="card">
      {`hour:min:sec:cs`}
          <h1>{formate()}</h1>
          <button onClick={startStop}>{isRunning?'stop':'start'}</button>
          <button onClick={reSet}>reset</button>
      </div>
    </div>
  )
}

export default App
