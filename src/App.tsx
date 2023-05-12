import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="mini-container">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App