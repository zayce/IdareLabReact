import "./Footer.scss";

import FLogo from "./FooterLogo.png";
import WI from "./WhiteInst.png";
import Wp from "./WhiteWp.png";
import WTT from "./WhiteTT.png";
import { useMyContext } from "../UseContext";

export const Footer = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-Footer-Wrapper">
        <div className="IdareLab-Footer-Inner">
          <div className="IdareLab-Footer-Logo">
            <img src={FLogo} />
          </div>
          <div className="IdareLab-Footer-Navigation">
            <div className="IdareLab-Footer-Phone">
              +994 50 444 54 14 / +994 50 394 55 68
            </div>
            <div className="IdareLab-Footer-Email">idarelab@gmail.com</div>
            <div className="IdareLab-Footer-Year">2024</div>
          </div>
          <div className="IdareLab-Footer-Social">
            <div className="IdareLab-Footer-Medias">
              <div className="IdareLab-Footer-Media">
                <img src={Wp} />
              </div>
              <div className="IdareLab-Footer-Media">
                <img src={WTT} />
              </div>
              <div className="IdareLab-Footer-Media">
                <img src={WI} />
              </div>
            </div>
            <div className="IdareLab-Footer">
              {translations[language].AllRightsReserved}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
