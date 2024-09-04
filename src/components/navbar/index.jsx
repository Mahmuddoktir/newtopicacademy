import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  const navbarHeight = 84;

  const list = [
    { title: t("whyUs"), link: "advantages" },
    { title: t("results"), link: "results" },
    { title: t("courses"), link: "courses" },
    { title: t("faq"), link: "faq" },
  ];

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className="w-full fixed lg:py-0 top-0 left-0 hidden-md flex-md bg-white-md lg:h-13 bg-white shadow-md z-10 md:bg-white"
    >
      <div className="h-8 lg:flex lg:justify-between lg:items-center lg:py-14 px-14 py-6 ">
        <div className="navbar-logo flex items-center py-5 gap-7 px-10">
          <a href="logos">
            <img src="/images/logo.png" alt="logo" className="h-10" />
          </a>
          <p className="w-[10rem] text-sm lg:inline-block">{t("logoText")}</p>
        </div>

        <div className="lg:hidden">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute top-6 right-8 cursor-pointer transition-transform duration-500 transform"
          >
            {open ? (
              <FaTimes className="transition-opacity duration-300 ease-in-out opacity-100" />
            ) : (
              <GiHamburgerMenu className="transition-opacity duration-300 ease-in-out opacity-100" />
            )}
          </div>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:h-12 lg:py-0 lg:gap-10 bg-white lg:static absolute left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in-out ${
            open
              ? "top-8 opacity-100"
              : "top-[-490px] opacity-1 lg:opacity-100"
          }`}
        >
          {list.map((item, index) => (
            <li key={index} className="lg:text-lg text-base lg:my-0 my-4">
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-navbarHeight}
                duration={1500}
                href={item.link}
                className="text-gray-700 hover:text-gray-400 transition-colors duration-500"
                onClick={() => setOpen(false)} // Close menu on click
              >
                
                {item.title}
              </Link>
            </li>
          ))}

          <li className="lg:text-lg text-base py-1 lg:my-0 my-4">
            <a
              href="tel:+998333060098"
              className="text-gray-700 hover:text-gray-400 transition-colors duration-500"
            >
              <p>+998 (33) 306 0097</p>
              <p>{t("connectNow")}</p>
            </a> 
          </li>
          <li className="lg:mb-0 mb-4">
            <select
              onChange={handleChange}
              className="lg:text-xl text-base bg-white border border-gray-300 text-gray-800 outline-none py-1 px-4 rounded-lg"
            >
              <option value="uz">Uzb</option>
              <option value="ru">Рус</option>
              <option value="en">Eng</option>
            </select>
            <div id="burger" className="hidden pt-3 ml-7">
            <span className="flex h-1  w-8 bg-teal-300 mb-1"></span>
            <span className="flex h-1  w-8 bg-teal-300 mt-1"></span>
            <span className="flex h-1  w-8 bg-teal-300 mt-1"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
