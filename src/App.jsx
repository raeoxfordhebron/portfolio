import Header from './components/Header'
import './App.css'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Footer from "./components/Footer"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="App">
      <Header/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
