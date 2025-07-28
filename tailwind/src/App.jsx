import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let user={
  name:"venu",
  age:"22"
}
  return (
    <>
    <Card chanel="venu aur code" btntext="click me"/>
    <Card chanel="lokesh aur code" btntext="visit me"/>
    <Card chanel="kohi aur code"/>
    </>
    
  )
}

export default App
