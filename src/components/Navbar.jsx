import logo from "../assets/Mlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <img className="mx-2" src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
      </div>
      <div className="flex-grow">
        <div className="flex justify-center space-x-8">
          <a href="#about" className="text-xl text-light gray-500 hover:text-blue-500 transition duration-300">About</a>
          <a href="#projects" className="text-xl text-lighr gray-500 hover:text-blue-500 transition duration-300">Projects</a>
          <a href="#contact" className="text-xl text-light gray-500 hover:text-blue-500 transition duration-300">Contact</a>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/Maniskumar123" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://x.com/Captain_9p" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/manishoffical07/?igsh=cHI4NXl5OWh5ZDNx" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-blue-500 transition duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;