import Home from "./pages/Home"
import Nav from "./components/Nav"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
