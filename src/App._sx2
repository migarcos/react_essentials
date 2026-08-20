// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useState, useCallback } from "react";
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"

// 🛩️ 🪂  🧗 
function App() {
  const myEmoji = "✈️";
  const textBtn = "Search Destination";

  const [ message, setMessage ] = useState("Adventure Travel")

  const mngClick = () => {
    setMessage("Ready to Trip")
  }

  const callback = useCallback(
    (data) => {
      setMessage(data)
    },
  )

  return (
    <>
      <div>
        < ComponentA usrEmoji={myEmoji} title={ message } />
        < ComponentB textBtn={textBtn} ClickCtrl={mngClick} />
        &nbsp; &nbsp; &nbsp; 
        < ComponentB textBtn="CallBack" ClickCtrl={callback} />
      </div>
    </>
  )
}

export default App
