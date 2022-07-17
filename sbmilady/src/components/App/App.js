// import logo from "./assets/logo.svg";
// import sbmilady from "./assetes/sb-_-Milady_V0.0.png";
import "./App.css";
import Box from "../Box";
import Banner from "../Banner";
import { Routes, Route, HashRouter } from 'react-router-dom'

function Home() {
  return (
    <>
      <Box />
      <Box />
      <Box />
      <Box />
    </>
  )
}

function UserProfile() {
  return (
    <>
     <h2>User Profile</h2>
     <Box />
    </>
  )
}

function App() {
  return (
    <div>
      <HashRouter>
        <Banner />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;