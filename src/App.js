
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
