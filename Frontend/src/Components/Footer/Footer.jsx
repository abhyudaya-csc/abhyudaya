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
    name: "Shivam Rai",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+91-9151603350",
    role: "Convener",
    photo:
      "https://i.ibb.co/6CBYSWz/Whats-App-Image-2026-03-12-at-1-06-48-PM.jpg",
  },
  {
    name: "Richa Mishra",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+91-7007035985",
    role: "Co-Convener",
    photo: "https://i.postimg.cc/VkfHn917/Richa-Mishra.jpg",
  },
  // {
  //   name: "Aastha Singh",
  //   email: "abhyudaya.mmmut@gmail.com",
  //   phone: "+91-7754825697",
  //   role: "Sponsorship Head",
  //   photo: "https://i.postimg.cc/NjdPPstL/Aastha-Singh.jpg",
  // },
  // {
  //   name: "Jayant Singh",
  //   email: "abhyudaya.mmmut@gmail.com",
  //   phone: "+91-9696148767",
  //   role: "Public Relations Head",
  //   photo: "https://i.postimg.cc/8ck63SNP/Jayant-Singh.jpg",
  // },
  {
    name: "Divyansh Gupta",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+91-8318883708",
    role: "Design Lead",
    photo:
      "https://i.ibb.co/qYB2PQ11/Whats-App-Image-2026-03-12-at-1-07-04-PM.jpg",
  },
  {
    name: "Vivek Mani Tripathy",
    email: "abhyudaya.mmmut@gmail.com",
    phone: "+91-9341239691",
    role: "Technical Lead",
    photo: "https://i.postimg.cc/5t09Z2Fr/VMT.jpg",
  },
];
const leftContacts = contacts.slice(0, 3);
const rightContacts = contacts.slice(3, 6);

const socialLinks = [
  {
    href: "https://www.facebook.com/abhyudaya.mmmut/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/abhyudaya.mmmut",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://www.linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  {
    href: "https://www.youtube.com/@abhyudayammmut",
    icon: FaYoutube,
    label: "YouTube",
  },
  { href: "mailto:abhyudayammmut@gmail.com", icon: FaEnvelope, label: "Email" },
];

const ContactCard = ({ person }) => (
  <StarBorder color="#a855f7" speed="4s" className="footer-star-wrap">
    <div className="footer-card">
      <div className="footer-card__image-wrapper">
        <img
          src={person.photo}
          alt={person.name}
          className="footer-card__image"
        />
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
