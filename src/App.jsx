import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Home />
    </div>
    </>
  )
}

export default App
