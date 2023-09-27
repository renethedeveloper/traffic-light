import { useState } from 'react'

import './App.css'
import TrafficLight from './components/trafficLight'

function App() {
 const [color, setColor]=useState("")

  return (
    <>
  <TrafficLight/>
    </>
  )
}

export default App
