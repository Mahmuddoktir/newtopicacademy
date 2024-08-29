import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function Faq() {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();
  const contentRefs = useRef([]); // Ref to hold content divs

  const data = [
    {
      id: 1,
      question: t("faqs.question1")
    },
    {
      id: 2,
      question: t("faqs.question2")
    },
    {
      id: 3,
      question: t("faqs.question3")
    },
    {
      id: 4,
      question: t("faqs.question4")
    }
  ];

  const handleAccordion = (id) => {
    setSelected(selected === id ? null : id);
  };

  const getContentHeight = (index) => {
    if (contentRefs.current[index]) {
      return contentRefs.current[index].scrollHeight + "px";
    }
    return "0px";
  };

  return (
    <div id="faq" className="lg:my-10 md:my-8 my-5">
      <h2 className="lg:text-5xl text-2xl font-bold text-center lg:mb-10">
        {t("faqs.heading")}
      </h2>
      <div className="xl:px-40 space-y-4 p-6">
        {data.map((item, index) => (
          <div key={item.id} className="shadow-lg rounded-md overflow-hidden">
            <div
              className="flex justify-between items-center lg:text-xl bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer lg:p-5 p-3 py-4"
              onClick={() => handleAccordion(item.id)}
            >
              <p className="font-medium lg:text-xl">{item.question}</p>
              <span className="text-gray-600 lg:text-xl text-lg ml-3">
                {selected === item.id ? "-" : "+"}
              </span>
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  selected === item.id ? getContentHeight(index) : "0px",
              }}
              className={`lg:text-xl overflow-hidden transition-max-height duration-500 ease-in-out ${
                selected === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="lg:p-5 p-3 py-4 text-left text-gray-700 bg-gray-50">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
