
import './Navbar.css';
import { Globe } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <header>
      <nav className="navbar">

        {/* Logo */}
        <h1>
          <img src="/logo.png" alt="Luxury Nail Spa" />
        </h1>

        {/* Social Media Links */}
        <div className="nav-links">
          <a
            href="https://luxurynailspaoh.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={20} color="#d8b46a" />
          </a>

          <a
            href="https://www.facebook.com/luxurynailspaohio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} color="#d8b46a" />
          </a>

          <a
            href="https://www.instagram.com/luxurynailspa_dayton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} color="#d8b46a" />
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
