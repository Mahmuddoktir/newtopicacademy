import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

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
      className="w-full  top-5 left-1 bg-white shadow-sm"
    >
      <div className="lg:flex lg:justify-between lg:items-center lg:px-20 px-14 py-8">
        <div className="navbar-logo flex items-center gap-10">
          <a href="logos">
            <img src="/images/logo.png" alt="logo" className="h-15" />
          </a>
          <p className="w-[8rem] text-sm lg:inline-block">{t("logoText")}</p>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:gap-10 bg-white lg:static absolute left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] opacity-0 lg:opacity-100"
          }`}
        >
          {list.map((item, index) => (
            <li key={index} className="lg:text-xl text-base lg:my-0 my-4">
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-navbarHeight}
                duration={1500}
                href={item.link}
                className="text-blue-800 hover:text-blue-400 transition-colors duration-500"
                onClick={() => setOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li className="lg:text-xl text-base lg:my-0 my-4">
            <a
              href="tel:+998333060098"
              className="text-blue-800 hover:text-blue-400 transition-colors duration-500"
            >
              <p>+998 (33) 306 0098</p>
              <p>{t("connectNow")}</p>
            </a>
          </li>
          <li className="lg:mb-0 mb-4">
            <select
              onChange={handleChange}
              className="lg:text-xl text-base bg-white border border-gray-300 text-gray-800 outline-none py-1 px-5 rounded-lg"
            >
              <option value="uz">O'zb</option>
              <option value="ru">Рус</option>
              <option value="en">Eng</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
