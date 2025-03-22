import "./RainbowBaner.scss";

import First from "./First.png";
import Second from "./Second.png";
import Third from "./Third.png";
import { useMyContext } from "../UseContext";

export const RainbowBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-Rainbow-Baner-wrapper">
        <div className="IdareLab-Rainbow-Baner-Inner">
          <div className="IdareLab-Rainbow-Baner-FirstBLock">
            <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis">
              <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis-Name">
                {translations[language].ExperiencedTeamProfessionals}
              </div>
              <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis-Desc">
                {translations[language].Ourteamconsists}
              </div>
            </div>
            <div className="IdareLab-Rainbow-Baner-FirstBLock-Opis-Img">
              <img src={First} />
            </div>
          </div>
          <div className="IdareLab-Rainbow-Baner-SecondBLock">
            <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis">
              <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis-Name">
                {translations[language].ClientOriented}
              </div>
              <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis-Desc">
                {translations[language].WePrioritizeYourNeedsVision}
              </div>
            </div>
            <div className="IdareLab-Rainbow-Baner-SecondBLock-Opis-Img">
              <img src={Second} />
            </div>
          </div>
          <div className="IdareLab-Rainbow-Baner-ThirdBLock">
            <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis">
              <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Name">
                {translations[language].ProvenQualityAndReliability}
              </div>
              <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Desc">
                {translations[language].WithAStrong}
              </div>
            </div>
            <div className="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Img">
              <img src={Third} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
