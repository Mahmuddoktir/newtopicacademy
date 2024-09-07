import React from "react";
import { useTranslation } from "react-i18next";

function Advantage(props) {
  const { t } = useTranslation();

  const items = [
    {
      title: t("advantage.professionalTeachers"),
      desc: t("advantage.professionalTeachersDesc"),
    },
    {
      title: t("advantage.freeCoworking"),
      desc: t("advantage.freeCoworkingDesc"),
    },
    {
      title: t("advantage.weeklyEvents"),
      desc: t("advantage.weeklyEventsDesc"),
    },
    {
      title: t("advantage.freeMockExams"),
      desc: t("advantage.freeMockExamsDesc"),
    },
    {
      title: t("advantage.assistantCurators"),
      desc: t("advantage.assistantCuratorsDesc"),
    },
    {
      title: t("advantage.consultingServices"),
      desc: t("advantage.consultingServicesDesc"),
    },
  ];

  return (
    <div id="advantages" className="lg:mt-10 mt-4 lg:px-[6rem] px-6">
      <h2 className="lg:text-5xl text-2xl font-medium text-center">
        {t("advantage.header")}
      </h2>
      <div className="lg:mt-14 mt-10 grid grid-cols-1  lg:grid-cols-3 lg:gap-16 gap-8">
        {items.map((item, index) => (
          <div className="relative" key={index}>
            <div className="h-[10rem] lg:px-6 px-4 lg:py-10 py-6 rounded-3xl bg-teal-100 lg:min-h-64 md:min-h-40 sm:min-h-10 sm:min-w-20 sm:grid-flow-col-dense">
              <h4 className="md:text-2xl text-xl lg:mb-6 mb-2 font-medium">
                {item.title}
              </h4>
              <p className="lg:text-lg md:text-base text-sm">{item.desc}</p>
            </div>
            <div className="absolute top-[-1rem] left-7">
              <span className="text-white bg-teal-400 lg:text-3xl text-xl lg:p-4 p-3 rounded-3xl font-bold">
                {"0"}
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantage;
