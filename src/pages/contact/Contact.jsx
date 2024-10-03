import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./contact.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage("All fields are required!");
      setShowModal(true); // Show modal with validation message
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_jiah5qb", // EmailJS service ID
        "template_pr79wnt", //  EmailJS template ID
        formData, // Form data (name, email, message)
        "noEmh7zOrQDJBrjMT" //  EmailJS public key
      )
      .then(
        () => {
          setModalMessage(
            "Message sent successfully! I'll get back to you soon."
          );
          setShowModal(true);
        },
        () => {
          setModalMessage("Oops! Something went wrong. Please try again.");
          setShowModal(true);
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-subtext">
        Have a question or want to work together? Leave your details and
        I&apos;ll get back to you as soon as possible.
      </p>

      {/* Form to collect data */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="contact-input"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="contact-input message-input"
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <footer className="footer">
        <Link to="home" smooth={true} duration={500}>
          <div className="scroll-up-arrow">
            <i className="arrow-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 24 24"
              >
                <title></title>
                <path
                  fill="#fafafa"
                  d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                ></path>
              </svg>
            </i>
          </div>
        </Link>

        <div className="footer-content mt-5">
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://github.com/Digital231"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarunas-cironka/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:sarunas@cironka.lt"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={30} />
            </a>
          </div>
          <p className="mt-3">© {new Date().getFullYear()} Šarūnas Cironka</p>
        </div>
      </footer>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title className="custom-modal-title">
            Message Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">{modalMessage}</Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button
            className="custom-modal-button"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Contact;
