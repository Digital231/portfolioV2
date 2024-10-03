import ProfilePicture from "../../components/ProfilePicture";
import "./about.css";

function About() {
  return (
    <div className="container position-relative">
      <h2 className="about-heading d-flex justify-content-center m-5">About</h2>
      <div className="row"></div>
      <div className="row">
        <div className="col">
          <div className="about-content">
            <div className="profile d-flex flex-column justify-content-center align-items-center">
              <div className="profile-picture">
                <ProfilePicture />
              </div>
              <p className="profile-blurb text-white">
                Every line of code is a bridge between thought and reality,
                turning abstract ideas into interactive experiences. The MERN
                stack equips me to build that bridge, where programming becomes
                a reflection of endless growth and potential—ever-evolving and
                full of possibility.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills">
            <div className="skills-row">
              <div className="skills-item">
                <img src="/html.png" alt="HTML Icon" />
                <div className="skills-item-name">HTML</div>
              </div>
              <div className="skills-item">
                <img src="/react.png" alt="React Icon" />
                <div className="skills-item-name">React</div>
              </div>
              <div className="skills-item">
                <img src="/express.png" alt="Express Icon" />
                <div className="skills-item-name">Express.js</div>
              </div>
            </div>

            <div className="skills-row">
              <div className="skills-item">
                <img src="/js.png" alt="JavaScript Icon" />
                <div className="skills-item-name">JavaScript</div>
              </div>
              <div className="skills-item">
                <img src="/css.png" alt="CSS Icon" />
                <div className="skills-item-name">CSS</div>
              </div>
              <div className="skills-item">
                <img src="/mongodb.png" alt="MongoDB Icon" />
                <div className="skills-item-name">MongoDB</div>
              </div>
            </div>

            <div className="skills-row">
              <div className="skills-item">
                <img src="/socket.png" alt="Socket.io Icon" />
                <div className="skills-item-name">Socket.io</div>
              </div>
              <div className="skills-item">
                <img src="/npm.webp" alt="NPM Icon" />
                <div className="skills-item-name">NPM</div>
              </div>
              <div className="skills-item">
                <img src="/nodejs.png" alt="Node.js Icon" />
                <div className="skills-item-name">Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
