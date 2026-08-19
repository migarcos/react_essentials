// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"

// 🛩️ 🪂  🧗 
function App() {
  const myEmoji = "✈️";

  const textBtn = "Search Destination";

  return (
    <>
      <div>
        < ComponentA usrEmoji={myEmoji} title="Adventure Travel" />

        < ComponentB textBtn={textBtn} />
      </div>
    </>
  )
}

export default App
