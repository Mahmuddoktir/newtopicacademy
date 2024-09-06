import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Showcase(props) {
  const { t } = useTranslation();
  const navbarHeight = 84;

  return (
    
        <div className="mt-[8rem] md:ml-10 ml-3 relative overflow-hidden">
      <div className="xl:block flex flex-col items-center justify-center">
        <p className="flex items-center gap-10">
          <img src="/images/Rectangle.png" alt="sa" className="h-[2px] w-12" />
          <span className="lg:text-xl text-sm">{t("showcase.subtitle")}</span>
        </p>
        <h2
          className="2xl:leading-[5rem] 2xl:text-5xl xl:leading-[4rem] xl:text-4xl leading-8
        text-2xl font-medium xl:w-[65%] w-[90%] lg:my-[2rem] my-4 tracking-wider xl:text-left text-left"
        >
          {t("showcase.title")}
        </h2>
        <div className="sm:flex sm:gap-10 lg:text-md sm:text-base text-md ">
          <p className="flex items-center lg:gap-5 gap-1 w-[17rem]">
            <img src="/images/barg1.png" className="lg:h-5 h-5" alt="sa" />
            {t("showcase.benefit1")}
          </p>
          <p className="flex items-center lg:gap-0 gap-0 w-[15rem] md:mt-0 mt-10">
            <img src="/images/barg1.png" className="lg:h-8 h-7" alt="sa" />
            {t("showcase.benefit2")}
          </p>
        </div>
        <div className="mt-5">
          <Link
            to={"courses"}
            spy={true}
            smooth={true}
            offset={-navbarHeight}
            duration={1500}
            href={"courses"}
          >
            <button className="bg-teal-400 lg:px-5 uppercase font-helvetica px-3 lg:py-5 py-3 lg:rounded-xl rounded-xl shadow-md shadow-slate-400 text-white hover:bg-teal-300 active:scale-95">
              {t("showcase.buttonText")}
            </button>
          </Link>

          <p className="mt-2 font-serif ml-1 lg:text-lg sm:text-base text-md">
            {t("showcase.promoText")}
          </p>
        </div>
      </div>
      <div className="absolute top-2 right-[-10rem] hidden xl:block">
        <img src="/images/showcase.png" alt="showcase" />
      </div>
    </div>
  );
}

export default Showcase;
