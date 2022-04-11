import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* resume */}
    </div>
  );
}

export default App;
