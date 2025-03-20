import "./ServiceSection.scss";

import Ribicon from "./RubicksLogo.png";
import { useMyContext } from "../UseContext";

export const ServiceSection = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div class="IdareLab-services-section-wrapper">
        <div class="IdareLab-services-section-inner">
          <div class="IdareLab-services-section-Title">
            <div class="IdareLab-services-section-Title-Logo">
              <img src={Ribicon} />
            </div>
            <div class="IdareLab-services-section-title">
              {translations[language].FromIdeaToVisual}
            </div>
          </div>
          <div class="IdareLab-services-section">
            <div class="Block Smm">{translations[language].SMMPackages}</div>
            <div class="Block web">{translations[language].WebsiteDeveloping}</div>
            <div class="IdareLab-services-section-column">
              <div class="Blocks Brand">{translations[language].BrandIdentityDesign}</div>
              <div class="Blocks Create">{translations[language].CreatingMaterials}</div>
              <div class="Blocks individual"> {translations[language].individualServiceOptions}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
