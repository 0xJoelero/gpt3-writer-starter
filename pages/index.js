import i18n from "i18next";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { loadTranslations } from "./api/i18next";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = async (lng) => {
    // setLanguage(lng);
    console.log("lng :>> ", lng);
    await i18n.changeLanguage(lng).then(() => setLanguage(lng));
  };
  const initTranslations = async () => {
    await loadTranslations(language);
  };

  useEffect(() => {
    initTranslations();
  }, []);

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };
  return (
    <>
      {!language ? (
        <div className="root">
          <div className="container"></div>
        </div>
      ) : (
        <div className="root">
          <div className="container">
            <div className="header">
              <div style={{ display: "flex", flexDirection: "row", alignSelf: 'flex-end' }}>
                <a className="button" onClick={() => changeLanguage("es")}>
                  <p style={language === "es" ? { fontWeight: "bold" } : null}>
                    ES
                  </p>
                </a>
                <p>/</p>
                <a className="button" onClick={() => changeLanguage("en")}>
                  <p style={language === "en" ? { fontWeight: "bold" } : null}>
                    EN
                  </p>
                </a>
              </div>
              <div className="header-title">
                <h1>{t("title")}</h1>
              </div>
              <div className="header-subtitle">
                <h2>{t("subtitle")}</h2>
              </div>
            </div>
            {/* Add this code here*/}
            <div className="prompt-container">
              <textarea
                className="prompt-box"
                placeholder={t("placeholder")}
                value={userInput}
                onChange={onUserChangedText}
              />
              <div className="prompt-buttons">
                <a
                  className={
                    isGenerating ? "generate-button loading" : "generate-button"
                  }
                  onClick={callGenerateEndpoint}
                >
                  <div className="generate">
                    {isGenerating ? (
                      <span className="loader"></span>
                    ) : (
                      <p>{t("generate")}</p>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>{t("Output")}</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
