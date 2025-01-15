"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close the menu on mobile after selection
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "team", "contact"];
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop - 100; // Adjust for navbar height
          const offsetHeight = sectionElement.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed backdrop-blur-md w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href="https://rmkcet.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/rmkcet-logo.png"
            className="h-14 w-14 object-cover"
            alt="RMKCET Logo"
          />
        </Link>
        <div className="hidden xl:flex flex-col">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            R.M.K College of Engineering and Technology
          </span>
          <span className="self-center text-sm whitespace-nowrap dark:text-gray-300">
            Department of Computer Science and Engineering (Cyber Security)
          </span>
        </div>

        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <Link
            href="https://rmkcet.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span> Register Now</span>
            </HoverBorderGradient>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 rounded-lg md:border-0">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "events", label: "Events" },
              { id: "team", label: "Team" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => handleSectionClick(item.id)}
                  className={`block py-2 px-4 font-bold rounded-full ${
                    activeSection === item.id
                      ? "text-blue-700  border-2 border-indigo-50"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent"
                  } dark:text-white dark:hover:bg-gray-700`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
