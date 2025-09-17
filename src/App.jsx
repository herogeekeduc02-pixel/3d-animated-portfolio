import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <div className="container">
      <Hero/>
      <Services/>
      <Portifolio/>
      <Contact/>
    </div>
  )
}

export default App