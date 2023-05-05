import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import LangsItem from "./components/LangsItem"
import Sidebar from "./components/Sidebar"
import { languages } from "./data/languages"

function App() {
  return (
    <>
      <Sidebar />
      <div className="mini-container">
        <Header />
        <div className="main">
          <Intro />

          <section>
            <div>
              <h1>Sup, how ya doin</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, iste magnam animi vitae vero minus deserunt aperiam repellendus, ipsum id modi doloribus voluptatem ratione assumenda, earum asperiores tenetur fugiat esse.</p>
            </div>
          </section>

          <section>
            <div className="view">
              <h1>Languages</h1>
              <div className="flex">
                {
                  languages.map((obj, i) => (
                    <LangsItem {...obj} key={i} />
                  ))
                }
              </div>
            </div>
            <div className="view flex">
              <div>
                <h1>1+</h1>
                <p>experience</p>
              </div>
              <div>
                <h1>10</h1>
                <p>projects</p>
              </div>
            </div>
          </section>

          <section>
            projs
          </section>

          <section>
            contact me bruh
          </section>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App