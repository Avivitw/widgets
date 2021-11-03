import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log(" new language or Text");
  }, [language, text]);

  return <div></div>;
};

export default Convert;
