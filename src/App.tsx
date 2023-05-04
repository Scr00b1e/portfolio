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
          <div>
            <h1>Sup, how ya doin</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, iste magnam animi vitae vero minus deserunt aperiam repellendus, ipsum id modi doloribus voluptatem ratione assumenda, earum asperiores tenetur fugiat esse.</p>
          </div>
        </section>

        <section>
          <div>
            <h1>Languages</h1>
            <div className="flex">
              {
                languages.map((obj, i) => (
                  <LangsItem {...obj} key={i} />
                ))
              }
            </div>
          </div>
          <div>
            experience stuff
          </div>
        </section>

        <section>
          projs
        </section>

        <section>
          contact me bruh
        </section>

      </div>
    </div>
  )
}

export default App