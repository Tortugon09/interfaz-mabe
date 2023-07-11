import './App.css'
import SideBar from "./components/SideBar.jsx";
import Login from "./screens/Login.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<SideBar />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
