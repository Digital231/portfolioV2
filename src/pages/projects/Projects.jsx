import "./projects.css";

function Projects() {
  return (
    <section className="project-section position-relative" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-container mt-5">
        {/* Left side image */}
        <div className="project-image-container">
          <img
            src="/project1.png"
            alt="Project Screenshot"
            className="project-image"
          />
        </div>

        {/* Right side description */}
        <div className="project-description">
          <h3 className="project-title">Blog App</h3>
          <p className="project-text">
            Full stack blog app built with MERN stack. Includes user
            authentication, profile page, and admin dashboard. Hosted on Render
            free tier.
          </p>

          {/* Buttons */}
          <div className="project-buttons">
            <a
              target="_blank"
              href="https://www.cironka.lt"
              className="button-85"
            >
              Live App
            </a>
            <a
              href="https://github.com/Digital231/mern-blog"
              className="button-64"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        {/* Left side image */}

        {/* Right side description */}
        <div className="project-description">
          <h3 className="project-title">Chat app</h3>
          <p className="project-text">
            Full stack chat app built with MERN stack and Socket.io. Includes
            user authentication, profile page, and chat functionality. Hosted on
            Render free tier.
          </p>

          {/* Buttons */}
          <div className="project-buttons">
            <a
              target="_blank"
              href="https://lastdance.onrender.com"
              className="button-85"
            >
              Live App
            </a>
            <a
              href="https://github.com/Digital231/lastDance"
              className="button-64"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="project-image-container">
          <img
            src="/project2.png"
            alt="Project Screenshot"
            className="project-image"
          />
        </div>
      </div>
      <div className="project-container">
        {/* Left side image */}
        <div className="project-image-container">
          <img
            src="/project3.png"
            alt="Project Screenshot"
            className="project-image"
          />
        </div>

        {/* Right side description */}
        <div className="project-description">
          <h3 className="project-title">Chat App</h3>
          <p className="project-text">
            Similar chat app to previous project. MERN stack with socket.io.
            Hosted on Render free tier.
          </p>

          {/* Buttons */}
          <div className="project-buttons">
            <a
              target="_blank"
              href="https://mern-chat-7t2s.onrender.com"
              className="button-85"
            >
              Live App
            </a>
            <a
              href="https://github.com/Digital231/mern-chat"
              className="button-64"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        {/* Left side image */}

        {/* Right side description */}
        <div className="project-description">
          <h3 className="project-title">Defender JS game</h3>
          <p className="project-text">
            Project built with vanilla JS, simple game I have built to enhance
            my JavaScript skills.
          </p>

          {/* Buttons */}
          <div className="project-buttons">
            <a
              target="_blank"
              href="https://digital231.github.io/defenderGame/"
              className="button-85"
            >
              Live App
            </a>
            <a
              target="_blank"
              href="https://github.com/Digital231/defenderGame"
              className="button-64"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="project-image-container">
          <img
            src="/project4.png"
            alt="Project Screenshot"
            className="project-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
