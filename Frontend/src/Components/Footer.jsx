import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {

  const [iconSize, setIconSize] = useState(20);

  const contacts = [
    {
      name: "Aryan Singh",
      email: "abhyudaya.mmmut@gmail.com",
      phone: "+91-9369756579",
      role: "Cultural Secretary",
      photo: "https://i.postimg.cc/SKrQPzsC/Shivam-rai.jpg",
    },
    {
      name: "Arsh Singh",
      email: "abhyudaya.mmmut@gmail.com",
      phone: "+91-7317439179",
      role: "Sponsorship Head",
      photo: "https://i.postimg.cc/SKrQPzsC/Shivam-rai.jpg",
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

  const ContactCard = ({ person }) => (
    <div className="relative group w-[220px] h-[100px] flex justify-center">

      {/* Photo */}
     

      {/* Folder */}
      <img
        src="/fold.png"
        alt="folder"
        className="absolute bottom-0 w-[220px] h-[110px] object-contain z-20"
      />

      {/* Text */}
      <div className="absolute bottom-6 w-[220px] text-center z-30">

        <p className="text-xs font-semibold text-black">
          {person.name}
        </p>

        <p className="text-[11px] text-black">
          {person.role}
        </p>

        <div className="flex justify-center gap-3 mt-1 text-black">
          <a href={`mailto:${person.email}`}>
            <FaEnvelope size={iconSize}/>
          </a>

          <a href={`tel:${person.phone}`}>
            <FaPhone size={iconSize}/>
          </a>
        </div>

      </div>

    </div>
  );

  return (
    <footer className="bg-gray-900  text-white pt-2 pb-2 px-4 ml-[80px]">

      {/* TOP ROW */}
      <div className="grid grid-cols-3 items-center">

        {/* LEFT */}
        <div className="flex justify-center gap-4">
          {leftContacts.map((p,i)=>
            <ContactCard key={i} person={p}/>
          )}
        </div>

        {/* VIDEO */}
        <div className="flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/ziAZfHGa270"
            className="w-[260px] h-[90px] rounded-lg"
            allowFullScreen
            title="Abhyudaya Video"
          />
        </div>

        {/* RIGHT */}
        <div className="flex justify-center gap-4">
          {rightContacts.map((p,i)=>
            <ContactCard key={i} person={p}/>
          )}
        </div>

      </div>

      {/* SOCIAL */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 pt-2 border-t border-white/20 text-sm gap-3">

        <div className="flex space-x-4">

          <a href="https://www.facebook.com/abhyudaya.mmmut/">
            <FaFacebookF size={iconSize}/>
          </a>

          <a href="https://www.instagram.com/abhyudaya.mmmut">
            <FaInstagram size={iconSize}/>
          </a>

          <a href="https://www.linkedin.com">
            <FaLinkedinIn size={iconSize}/>
          </a>

          <a href="mailto:abhyudayammmut@gmail.com">
            <FaEnvelope size={iconSize}/>
          </a>

        </div>

        <p>
          Designed with ❤️ by
          <span className="text-blue-400"> Abhyudaya</span>
        </p>

        <div className="text-center md:text-right">
          <p>© {new Date().getFullYear()} Abhyudaya MMMUT</p>
          <p>An Enchanted Escaped</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;