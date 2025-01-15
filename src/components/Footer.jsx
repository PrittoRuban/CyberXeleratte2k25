import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree, SiX } from "react-icons/si";
import GoogleMap from "./ui/gmap";
import SectionHeading from "./ui/section-heading";

const Footer = () => {
  const address = "RSM Nagar, Gummidipoondi Taluk, Puduvoyal, Thiruvallur, Tamil Nadu 601206, India";
  return (
    <footer className="relative  text-black dark:text-white py-8 backdrop-blur-sm">
      <div className="bg-[#fbe2e3] absolute -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4b2c2c]"></div>

      <div className="container mx-auto px-4 max-w-screen-md py-12 mb-12">
        <SectionHeading>Our Location</SectionHeading>
        <h3 className="text-center text-lg font-semibold mb-4">
        RSM Nagar, Gummidipoondi Taluk, Puduvoyal, Tamil Nadu 601 206
        </h3>
        <GoogleMap address={address} />
      </div>

      <div className="container mx-auto px-6 flex md:space-x-52 flex-col items-center md:flex-row md:justify-between md:gap-6 z-10 max-w-screen-lg">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 hidden sm:block">
            R.M.K College of Engineering and Technology
          </h2>
          <h2 className="mb-4 sm:hidden">
            <img
              src="/rmkcet-logo.png"
              className="h-14 w-14 m-auto"
              alt="RMKCET Logo"
            />
          </h2>
          <p className="mb-4">
            Department of Computer Science and Engineering (Cyber Security)
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-6">
          <a
            href="https://twitter.com/PrittoRuban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <SiX size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prittoruban/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/PrittoRuban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linktr.ee/prittoruban"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <SiLinktree size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center mt-4 md:mt-8 relative z-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear().toString()} All rights reserved.
        </p>
        {/* <span className="text-sm">
          Made with ❤️ By{" "}
          <a
            href="https://www.linkedin.com/in/prittoruban/"
            target="_blank"
            className=" hover:text-blue-500"
          >
            Pritto Ruban
          </a>
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
