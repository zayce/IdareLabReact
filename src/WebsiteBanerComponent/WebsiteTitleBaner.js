import "./WebsiteTitleBaner.scss";

import Logo from "./Layer.png";
import { useMyContext } from "../UseContext";

export const WebsiteTitleBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div class="Idarelab-title-Website-wrapper">
        <div class="Idarelab-title-Website-inner">
          <div class="Idarelab-title-Website-title">
            <span class="Word">{translations[language].Website}</span>
            <img src={Logo} />
            <span class="Word">{translations[language].Developing}</span>
          </div>
          <div class="Idarelab-title-Website-desc">
            {translations[language].WeOffer}
          </div>
        </div>
      </div>
    </>
  );
};
