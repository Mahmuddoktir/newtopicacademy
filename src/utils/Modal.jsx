import React, { useCallback, useEffect, useState } from "react";
import SendingMsg from "./Message";
import { t } from "i18next";

function Modal({ onClose, heading, paragraph }) {
  const { sendMessage, error, loading, success } = SendingMsg();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    setIsVisible(true);

    // Disable scrolling
    document.body.style.overflow = "hidden";

    if (success) {
      setTimeout(() => {
        handleClose();
      }, 1000);
    }

    // Re-enable scrolling when modal is closed
    return () => {
      document.body.style.overflow = "";
    };
  }, [success, handleClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>

      <div
        className={`relative bg-white lg:w-1/3 md:w-2/3 w-[90%] lg:px-10 sm:py-10 py-8 px-10 rounded-lg shadow-lg z-10 transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-center md:text-3xl text-2xl font-medium mb-4">
          {heading}
        </h2>
        <p className="text-center mb-6 lg:text-lg md:text-base text-sm">
          {paragraph}
        </p>
        <form onSubmit={sendMessage} className="flex flex-col gap-4">
          <input
            id="name"
            type="text"
            placeholder={t("message.name")}
            className="px-5 py-4 rounded-md outline-none border lg:text-lg md:text-base text-sm"
            required
          />
          <input
            id="tel"
            type="tel"
            placeholder={t("message.tel")}
            className="px-5 py-4 rounded-md outline-none border lg:text-lg md:text-base text-sm"
            required
          />
          <button className="bg-teal-400 text-white py-3 rounded-md hover:bg-teal-500 active:scale-95">
            {loading ? t("message.sending") : t("modal.btnFree")}
          </button>
        </form>
        {success && (
          <div className="absolute top-4 right-4 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center shadow-lg">
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p className="text-green-700">{t("message.success")}</p>
          </div>
        )}
        {error && (
          <div className="absolute top-4 left-4 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center shadow-lg">
            <svg
              className="w-6 h-6 text-red-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
