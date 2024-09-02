// import logo from "../assets/kevinRushLogo.png";
import logo from "../assets/Logo4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-14 " src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sachinjakhar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sachin3104"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/_Sachin_Jakhar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://drive.google.com/file/d/1_Oq_sJSyHUS8z80rvWEZ7Rmy5-qrSxAZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <FaFileAlt />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
