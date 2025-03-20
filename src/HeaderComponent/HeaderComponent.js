import "./HeaderComponent.scss";
import Logo from "./logo.png";
import Lang from "./lang.png";
import { useMyContext } from "../UseContext";

export const Header = () => {
  const {handleLanguageChange, translations, language } =
    useMyContext();

  const handleLangChange = (lang) => {
    handleLanguageChange(lang); 
  };
  return (
    <>
      <div className="IdareLab-header-wrapper">
        <div className="IdareLab-header-inner">
          <div className="IdareLab-header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="IdareLab-header-langueges-items">
            <li
              className="IdareLab-header-langueges-item"
              onClick={() => handleLangChange("en")}
            >
              eng
            </li>
            <li
              className="IdareLab-header-langueges-item"
              onClick={() => handleLangChange("ru")}
            >
              ru
            </li>
            <li
              className="IdareLab-header-langueges-item"
              onClick={() => handleLangChange("az")}
            >
              az
            </li>
            <li className="IdareLab-header-langueges-item">
              <img src={Lang} alt="Lang" />
            </li>
          </ul>
          <div className="IdareLab-header-Info">
            <ul className="IdareLab-header-Info-Items">
              <li className="IdareLab-header-Info-Item">
                {translations[language].services}
              </li>
              <li className="IdareLab-header-Info-Item">{translations[language].aboutUs}</li>
              <li className="IdareLab-header-Info-Item">{translations[language].Blog}</li>
              <li className="IdareLab-header-Info-Item">{translations[language].Contacts}</li>
            </ul>
            <button className="IdareLab-header-Info-Button">
              <span className="button-words">{translations[language].OrderAProject}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
