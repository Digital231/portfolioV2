import ScrambleText from "./ScrambleText";
import Particle from "./Particle";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Particle />
      <div className="centered-content">
        <h1>
          Hello, I&apos;m <ScrambleText text="Šarūnas" className="highlight" />.
        </h1>
        <p>I&apos;m a full stack web developer.</p>
        <Link to="projects" smooth={true} duration={500}>
          <button className="button-49">View my work</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
