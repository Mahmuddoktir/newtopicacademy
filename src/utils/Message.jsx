import axios from "axios";
import { useState, useEffect } from "react";

function SendingMsg(props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const token = "7345385610:AAFWT5030Xi6xQlj1S7yU_taceVQufg6FMM";
    const chatId =  -1002221901533;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = e.target.elements.name.value;
    const tel = e.target.elements.tel.value;

    axios({
      method: "POST",
      url: url,
      data: {
        chat_id: chatId,
        text: `Name: ${name}\nTelephone: ${tel}`,
      },
    })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        setError("Oops! Something went wrong. Please try again.");
      });
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);
  return { sendMessage, error, loading, success };
}

export default SendingMsg;
