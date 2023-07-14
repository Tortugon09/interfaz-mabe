import './App.css'
import SideBar from "./components/SideBar.jsx";
import Login from "./screens/Login.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ContextProvider} from "./context/context.jsx";

function App() {


  return (
      <ContextProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<SideBar />} />
              </Routes>
          </BrowserRouter>
      </ContextProvider>
  )
}

export default App
