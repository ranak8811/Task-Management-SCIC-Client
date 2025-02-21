import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#040d0d] text-[#f8fdfd] py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side - Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Task Manager</h2>
          <p className="text-sm text-[#9aade3]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="space-x-4 text-sm">
          <a href="/" className="hover:text-[#43cbc3] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#43cbc3] transition">
            About
          </a>
          <a href="/contact" className="hover:text-[#43cbc3] transition">
            Contact
          </a>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
