import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home.tsx";
import MakeAppointment from "./pages/MakeAppointment.tsx";
import Profile from "./pages/Profile.tsx";
import Layout from "./components/layout/Layout.tsx";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="make-appointment" element={<MakeAppointment/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
