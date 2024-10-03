import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <div id="home">
        <LandingPage />
      </div>
      <Navbar />
      <div id="about" style={{ minHeight: "100vh" }}>
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
