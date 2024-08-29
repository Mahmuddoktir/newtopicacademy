import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-scroll";

function Footer(props) {
  const { t } = useTranslation();
  const navbarHeight = 84;

  const items = [
    { title: t("whyUs"), link: "advantages" },
    { title: t("results"), link: "results" },
    { title: t("courses"), link: "courses" },
    { title: t("faq"), link: "faq" },
  ];

  const socialMedia = [
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <PiTelegramLogoLight />, link: "https://telegram.org" },
    { icon: <RiYoutubeLine />, link: "https://youtube.com" },
    { icon: <LuPhone />, link: "+998901234567" },
  ];

  return (
    <footer className="bg-sky-200 text-white lg:rounded-xl md:mb-4 mx-0 xl:mx-16 md:mx-6 md:rounded-md p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <a href="showcase">
            <img
              src="/images/logo_footer.svg"
              alt="Logo"
              className="h-20 md:h-auto"
            />
          </a>
        </div>
        <ul className="flex justify-center md:justify-center gap-6 md:gap-12 text-sm md:text-lg">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-navbarHeight}
                duration={1500}
                href={item.link}
                className=" hover:text-gray-400 transition-colors duration-500 cursor-pointer"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center md:justify-end gap-6 text-lg md:text-2xl">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a
                rel="noopener noreferrer"
                href={item.link}
                className="hover:text-gray-300 transition-colors duration-300"
                target="_blank"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
