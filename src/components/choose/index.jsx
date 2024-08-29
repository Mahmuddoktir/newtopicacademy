import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../utils/Modal";

function Choose(props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const items = [
    { img: "/images/choose1.png", title: t("choose.item1") },
    { img: "/images/choose2.png", title: t("choose.item2") },
    { img: "/images/choose3.png", title: t("choose.item3") },
    { img: "/images/choose4.png", title: t("choose.item4") },
    { img: "/images/choose5.png", title: t("choose.item5") },
    { img: "/images/choose6.png", title: t("choose.item6") },
  ];

  const heading = t("choose.modalHeading");
  const paragraph = t("choose.modalParagraph");

  return (
    <div className="relative lg:px-[16rem] lg:py-[16rem] py-10 px-12">
      <h2 className="text-center lg:text-5xl text-2xl font-bold lg:mb-15">
        {t("choose.heading")}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-2 lg:mt-[6rem] mt-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-blue-100 lg:w-[10rem] lg:h-[10rem] w-[3rem] h-[3rem] rounded-md lg:mb-4 mb-2 flex justify-center items-center">
              <img
                src={item.img}
                alt={item.title}
                className="lg:w-24 lg:h-24 w-16 h-16 object-contain"
              />
            </div>
            <p className="lg:text-lg md:text-base text-sm font-normal w-[70%]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="lg:px-24 bg-sky-400 px-16 lg:py-6 py-3 lg:rounded-2xl rounded-sm shadow-md shadow-slate-400 bg-teal-400 text-white
         hover:bg-sky-300 active:scale-95"
          onClick={() => setOpen(false)}
        >
          {t("choose.button")}
        </button>
      </div>
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          heading={heading}
          paragraph={paragraph}
        />
      )}
    </div>
  );
}

export default Choose;
