// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useState } from "react";
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

  return (
    <>
      <div>
        < ComponentA usrEmoji={myEmoji} title={ message } />

        < ComponentB textBtn={textBtn} ClickCtrl={mngClick} />
      </div>
    </>
  )
}

export default App
