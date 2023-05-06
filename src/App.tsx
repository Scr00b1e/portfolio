import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <>
      <Sidebar />
      <div className="mini-container">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App