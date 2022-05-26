import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GuestList from "./components/GuestList";
import Header from "./components/Header";
import GuestStats from "./components/GuestStats";
import GuestForm from "./components/GuestForm";
import { GuestProvider } from "./context/GuestContext";
import AboutPage from "./pages/AboutPage";
import AboutToLink from "./components/AboutToLink";

// This is the Parent component where props is passed down
function App() {

return (
    <GuestProvider>
    <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route exact path="/" element={
          <>
        <GuestForm  />
        <GuestStats />
        <GuestList />
          </>
        }>
      </Route>
      <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
        <AboutToLink />
    </Router>
    </GuestProvider>
  )
}

export default App;
