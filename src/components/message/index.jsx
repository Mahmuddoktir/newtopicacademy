import { useTranslation } from "react-i18next";
import Button from "../../utils/Button";
import SendingMsg from "../../utils/Message";

function Message(props) {
  const { t } = useTranslation();
  const { sendMessage, error, loading, success } = SendingMsg();

  return (
    <div className="relative bg-teal-100 md:rounded-xl lg:my-10 sm:my-8 p-8 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 lg:mx-[10rem] sm:mx-6">
      <div className="mb-8 md:mb-0 md:max-w-[450px]">
        <h2 className="text-2xl lg:text-4xl font-serif lg:leading-[3rem] mb-4 lg:mb-10">
          {t("message.heading")}
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          {t("message.desc")}
        </p>
      </div>
      <form className="flex flex-col gap-6 md:w-[25rem]" onSubmit={sendMessage}>
        <input
          id="name"
          type="text"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          placeholder={t("message.name")}
          required
        />
        <input
          id="tel"
          type="tel"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          placeholder={t("message.tel")}
          required
        />
        <Button
          title={loading ? t("message.sending") : t("message.button")}
          padding="0.5rem 1.5rem"
          disabled={loading}
        />
      </form>
      {success && (
        <div className="absolute md:top-[-3rem] md:right-[-12rem] top-0 right-5 transform -translate-x-1/2 p-4 bg-teal-100 border border-teal-300 rounded-lg flex items-center shadow-lg">
          <svg
            className="w-6 h-6 text-teal-600 mr-2"
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
          <p className="text-teal-700">{t("message.success")}</p>
        </div>
      )}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center shadow-lg">
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
  );
}

export default Message;
