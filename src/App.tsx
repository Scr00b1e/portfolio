import Header from "./components/Header"
import Intro from "./components/Intro"
import LangsItem from "./components/LangsItem"
import { languages } from "./data/languages"

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Intro />
        <section>
          <h1>Languages</h1>
          <div className="flex">
            {
              languages.map((obj, i) => (
                <LangsItem {...obj} key={i} />
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default App