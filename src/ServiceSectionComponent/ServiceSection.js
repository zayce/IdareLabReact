import "./ServiceSection.scss";

import Ribicon from "./RubicksLogo.png";
import { useMyContext } from "../UseContext";

export const ServiceSection = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="IdareLab-services-section-wrapper">
        <div className="IdareLab-services-section-inner">
          <div className="IdareLab-services-section-Title">
            <div className="IdareLab-services-section-Title-Logo">
              <img src={Ribicon} />
            </div>
            <div className="IdareLab-services-section-title">
              {translations[language].FromIdeaToVisual}
            </div>
          </div>
          <div className="IdareLab-services-section">
            <div className="IdareLab-services-section-column">
              <div className="Block Smm">
                {translations[language].SMMPackages}
              </div>
              <div className="Block web">
                {translations[language].WebsiteDeveloping}
              </div>
            </div>
            <div className="IdareLab-services-section-columns">
              <div className="Blocks Brand">
                {translations[language].BrandIdentityDesign}
              </div>
              <div className="Blocks Create">
                {translations[language].CreatingMaterials}
              </div>
              <div className="Blocks individual">
                {" "}
                {translations[language].individualServiceOptions}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
