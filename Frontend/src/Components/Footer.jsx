import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import StarBorder from "./StarBorder";
import "./Footer.css";

const contacts = [
  {
    name: "Aryan Singh",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+91-9369756579",
    role: "Cultural Secretary",
    photo: "https://i.postimg.cc/gkDMnzn4/Amar-Yadav.jpg",
  },
  {
    name: "Arsh Singh",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+91-7317439179",
    role: "Sponsorship Head",
    photo: "https://i.postimg.cc/gkDMnzn4/Amar-Yadav.jpg",
  },
  {
    name: "Satish Kumar",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+1234567897",
    role: "Public Relations Head",
    photo: "https://i.postimg.cc/gkDMnzn4/Amar-Yadav.jpg",
  },
  {
    name: "Pritish Tomar",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+919520405332",
    role: "Technical Lead",
    photo: "https://i.postimg.cc/gkDMnzn4/Amar-Yadav.jpg",
  },
];

const leftContacts = contacts.slice(0, 2);
const rightContacts = contacts.slice(2, 4);

const socialLinks = [
  { href: "https://www.facebook.com/abhyudaya.mmmut/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/abhyudaya.mmmut", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@abhyudayammmut", icon: FaYoutube, label: "YouTube" },
  { href: "mailto:abhyudayammmut@gmail.com", icon: FaEnvelope, label: "Email" },
];

const ContactCard = ({ person }) => (
  <StarBorder color="#a855f7" speed="4s" className="footer-star-wrap">
    <div className="footer-card">
      <div className="footer-card__image-wrapper">
        <img src={person.photo} alt={person.name} className="footer-card__image" />
      </div>
      <h4 className="footer-card__name">{person.name}</h4>
      <p className="footer-card__role">{person.role}</p>
      <div className="footer-card__actions">
        <a
          href={`mailto:${person.email}`}
          className="footer-card__action-btn"
          aria-label={`Email ${person.name}`}
        >
          <FaEnvelope size={14} />
          <span>Email</span>
        </a>
        <a
          href={`tel:${person.phone}`}
          className="footer-card__action-btn"
          aria-label={`Call ${person.name}`}
        >
          <FaPhone size={14} />
          <span>Call</span>
        </a>
      </div>
    </div>
  </StarBorder>
);

const Footer = () => (
  <footer className="footer">
    {/* Decorative top edge */}
    <div className="footer__top-edge" />

    {/* Main Content: Cards + Video row on desktop */}
    <section className="footer__section">
      <h3 className="footer__heading">Get In Touch</h3>

      <div className="footer__hero-row">
        {/* Left 2 cards */}
        <div className="footer__cards-col">
          {leftContacts.map((person, i) => (
            <ContactCard key={i} person={person} />
          ))}
        </div>

        {/* Center video */}
        <div className="footer__video-col">
          <p className="footer__video-label">Our Aftermovie</p>
          <div className="footer__video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/ziAZfHGa270"
              allowFullScreen
              loading="lazy"
              title="Abhyudaya Aftermovie"
              className="footer__video"
            />
          </div>
        </div>

        {/* Right 2 cards */}
        <div className="footer__cards-col">
          {rightContacts.map((person, i) => (
            <ContactCard key={i + 2} person={person} />
          ))}
        </div>
      </div>
    </section>

    {/* Bottom Bar */}
    <div className="footer__bottom">
      <div className="footer__socials">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-icon"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="footer__info">
        <p className="footer__love">
          Designed with <span className="footer__heart">❤️</span> by{" "}
          <span className="footer__brand">Abhyudaya</span>
        </p>
        <p className="footer__copy">
          © {new Date().getFullYear()} Abhyudaya - MMMUT | An Enchanted Escaped
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;