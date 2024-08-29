import React from "react";
import { useTranslation } from "react-i18next";

function Scholarship(props) {
  const { t } = useTranslation();

  return (
    <div className="lg:my-[4rem] my-4 mb-25 lg:px-[6rem] px-12">
      <h2 className="lg:text-5xl text-2xl text-center leading-8 font-medium">
        {t("scholarship.title")}
      </h2>
      <div className="lg:mt-[3rem] mt-8 lg:flex lg:items-center lg:gap-[1rem]">
        <div className="lg:w-1/2 sm:w-2/3 w-full flex justify-center lg:justify-start">
          <img
            src="/images/scholarship.png"
            alt="Scholarship"
            className="w-full h-auto lg:max-w-[75%] object-contain"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:my-0 my-10">
          <div className="lg:mb-10 mb-5">
            <h3 className="lg:text-3xl text-xl lg:mb-6 mb-3 font-medium">
              {t("scholarship.gksGrantTitle")}
            </h3>
            <p className="lg:text-md md:text-base text-md lg:leading-8">
              {t("scholarship.gksGrantDescription")}
            </p>
          </div>
          <div>
            <h3 className="lg:text-3xl text-xl lg:mb-6 mb-6 font-sans">
              {t("scholarship.whatGKSProvidesTitle")}
            </h3>
            <ul className="lg:text-lg md:text-base text-sm list-disc lg:leading-8 ml-4">
              <li>{t("scholarship.whatGKSProvides.point1")}</li>
              <li>{t("scholarship.whatGKSProvides.point2")}</li>
              <li>{t("scholarship.whatGKSProvides.point3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scholarship;
