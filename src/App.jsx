import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Containers from "./containers/Containers"

function App() {
  return (
    <BrowserRouter>
      <Containers />
    </BrowserRouter>
  )
}

export default App
