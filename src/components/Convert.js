import React, { useState, useEffect } from "react";
import KEY from "../apis";

import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: KEY,
        },
      }
    );
  }, [language, text]);

  return <div></div>;
};

export default Convert;
