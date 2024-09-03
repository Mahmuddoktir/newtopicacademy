import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import Modal from "../../utils/Modal";

function Success(props) {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const url = "/images/result.png";
  const repeatedImg = Array(10).fill(url);

  const heading = t("choose.modalHeading");
  const paragraph = t("choose.modalParagraph");

  return (
    <div className="lg:my-[3rem] my-8 lg:ml-[6rem] lg:px-0 px-6 flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center lg:mb-8 mb-4">
        <h2 className="lg:text-5xl lg:leading-[3rem] text-2xl leading-[2rem] text-center font-medium lg:px-10 px-8">
          {t("success.title")}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:items-start justify-between lg:gap-[5rem] gap-[2rem] lg:mt-16">
        <div className=" lg:text-left">
          <p className="lg:text-lg md:text-base text-sm lg:mb-8 mb-4">
            <span className="text-teal-300">TOPIK academy consulting</span>{" "}
            {t("success.description")}
          </p>
          <div className="lg:text-left text-center">
            <span className="block lg:mb-4 mb-2 w-[32rem] mx-auto lg:mx-0 lg:text-base md:text-sm text-xs">
              {t("success.consultationInfo")}
            </span>
            <button
              className="lg:px-12 px-8 lg:py-4 py-6 lg:rounded-3xl rounded-lg shadow-md shadow-slate-400 bg-teal-400 text-white
         hover:bg-teal-300 active:scale-95 transition-all duration-300 ease-in"
              onClick={() => setOpen(true)}
            >
              {t("success.applyButton")}
            </button>
          </div>
        </div>

        <div className="w-[60%] hidden lg:block">
          <Marquee gradient>
            {repeatedImg.map((item, index) => (
              <img key={index} src={item} alt={item} className="mx-6" />
            ))}
          </Marquee>
        </div>
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

export default Success;
