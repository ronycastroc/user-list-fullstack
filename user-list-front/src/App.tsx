import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import List from "./pages/List"
import EditUser from "./pages/EditUser"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user-list" element={<List />}/>
        <Route path="/edit-user" element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
