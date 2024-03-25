import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Testimonials from "./pages/Testimonials"
import Profile from "./pages/Profile"
import Membership from "./pages/Membership"
import LandingPage from "./pages/LandingPage"
import ExploreBooks from "./pages/ExploreBooks"
import Cards from "./Components/Cards"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"



function App() {
  return (
    <>

      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/ExploreBooks" element={<ExploreBooks />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />

        </Routes>
      </div>

    </>
  )
}

export default App
