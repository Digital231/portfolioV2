import "./projects.css";

function Projects() {
  return (
    <section className="project-section position-relative" id="projects">
      <h2 className="projects-heading">Projects</h2>

      <div className="container">
        {/* First Project */}
        <div className="row g-4 mt-5">
          <div className="col-12 col-md-6">
            <div className="project-image-container">
              <img
                src="/project1.png"
                alt="Project Screenshot"
                className="project-image img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="project-description">
              <h3 className="project-title">Blog App</h3>
              <p className="project-text">
                Full stack blog app built with MERN stack. Includes user
                authentication, profile page, and admin dashboard. Hosted on own
                server.
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://sarunas-blog.netlify.app/"
                  className="button-85"
                >
                  Live App
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Digital231/mern-blog"
                  className="button-64"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="row g-4 mt-5">
          <div className="col-12 col-md-6 order-md-2">
            <div className="project-image-container">
              <img
                src="/project4.png"
                alt="Project Screenshot"
                className="project-image img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="project-description">
              <h3 className="project-title">AI-Powered Moderation</h3>
              <p className="project-text">
                Automatically validate content with precision and speed. Hosted
                on GCP as docker container.
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://frontend-279549734697.europe-west1.run.app/"
                  className="button-85"
                >
                  Live App
                </a>
                <a
                  target="_blank"
                  href="https://frontend-279549734697.europe-west1.run.app/about"
                  className="button-64"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="row g-4 mt-5">
          <div className="col-12 col-md-6">
            <div className="project-image-container">
              <img
                src="/project3.png"
                alt="Project Screenshot"
                className="project-image img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="project-description">
              <h3 className="project-title">Chat App</h3>
              <p className="project-text">
                Similar chat app to previous project. MERN stack with socket.io.
                Hosted on Render takes time to "wake" server up.
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://mern-chat-7t2s.onrender.com"
                  className="button-85"
                >
                  Live App
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Digital231/mern-chat"
                  className="button-64"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="row g-4 mt-5">
          <div className="col-12 col-md-6 order-md-2">
            <div className="project-image-container">
              <img
                src="/project2.png"
                alt="Project Screenshot"
                className="project-image img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="project-description">
              <h3 className="project-title">Chat app</h3>
              <p className="project-text">
                Full stack chat app built with MERN stack and Socket.io.
                Includes user authentication, profile page, and chat
                functionality. Hosted on Render takes time to "wake" server up.
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://lastdance.onrender.com"
                  className="button-85"
                >
                  Live App
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Digital231/lastDance"
                  className="button-64"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
