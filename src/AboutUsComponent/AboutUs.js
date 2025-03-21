import { useMyContext } from "../UseContext";
import "./AboutUs.scss";

import Log from "./Log.png";

export const AboutUs = () => {
  const { translations, language } = useMyContext();

  return (
    <>
      <div class="IdareLab-AboutUs-Baner-wrapper">
        <div class="IdareLab-AboutUs-Baner-inner">
          <div class="IdareLab-AboutUs-Baner-Title">
            <div class="IdareLab-AboutUs-Baner-Title-Name">
              <div class="IdareLab-AboutUs-Baner-Name">
                {translations[language].aboutUs}
              </div>
              <div class="IdareLab-AboutUs-Baner-Title-Img">
                <img src={Log} />
              </div>
            </div>
            <div class="IdareLab-AboutUs-Baner-Desc">
              {translations[language].WithABlend}
            </div>
          </div>
          <div class="IdareLab-AboutUs-Baner-Objects">
            <div class="IdareLab-AboutUs-Baner-Object">
              <div class="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].WhoWeAre}
              </div>
              <div class="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].AYoungMarketing}
              </div>
            </div>
            <div class="IdareLab-AboutUs-Baner-Object">
              <div class="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurApproach}
              </div>
              <div class="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].WeStay}
              </div>
            </div>
            <div class="IdareLab-AboutUs-Baner-Object">
              <div class="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurGoal}
              </div>
              <div class="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].ToHelp}
              </div>
            </div>
            <div class="IdareLab-AboutUs-Baner-Object">
              <div class="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurValues}
              </div>
              <ul class="IdareLab-AboutUs-Baner-Object-Menu-Items">
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-bond">
                    {translations[language].OurValues1}
                  </span>
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].OurValues4}
                  </span>
                </li>
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-bond">
                    {translations[language].OurValues2}
                  </span>
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].OurValues5}
                  </span>
                </li>
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-bond">
                    {translations[language].OurValues3}
                  </span>
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].OurValues6}
                  </span>
                </li>
              </ul>
            </div>
            <div class="IdareLab-AboutUs-Baner-Object">
              <div class="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].WhatWeDo}
              </div>
              <ul class="IdareLab-AboutUs-Baner-Object-Menu-Items">
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].BrandCreationAndDevelopment}
                  </span>
                </li>
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].SocialMediaManagement}
                  </span>
                </li>
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].PhotoAndVideoContentProduction}
                  </span>
                </li>
                <li class="IdareLab-AboutUs-Baner-Object-Menu-Item">
                  <span class="IdareLab-AboutUs-Baner-Object-Menu-Item-normal">
                    {translations[language].CreativeAndAdvertisingPostDesign}
                  </span>
                </li>
              </ul>
            </div>
            <div class="IdareLab-AboutUs-Baner-Object">
              <div class="IdareLab-AboutUs-Baner-Object-Name">
                {translations[language].OurPlans}
              </div>
              <div class="IdareLab-AboutUs-Baner-Object-Desc">
                {translations[language].WeAre}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
