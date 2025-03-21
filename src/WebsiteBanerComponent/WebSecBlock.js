import "./WebSecBlock.scss";

import One from "./WebAsessts/01.png";
import two from "./WebAsessts/02.png";
import three from "./WebAsessts/03.png";
import four from "./WebAsessts/04.png";
import five from "./WebAsessts/05.png";
import Time from "./WebAsessts/timeline.png";
import { useMyContext } from "../UseContext";

export const WebSecBlock = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div class="Idarelab-Website-section-wrapper">
        <div class="Idarelab-Website-section-inner">
          <div class="Idarelab-Website-section-Numbers">
            <div class="Idarelab-Website-section-Number">01</div>
            <div class="Idarelab-Website-section-Number">02</div>
            <div class="Idarelab-Website-section-Number">03</div>
            <div class="Idarelab-Website-section-Number">04</div>
            <div class="Idarelab-Website-section-Number">05</div>
          </div>
          <div class="Img-Website">
            <img class="time" src={Time} />
          </div>
          <div class="Idarelab-Website-section-Blocks">
            <div class="Idarelab-Website-section-Block">
              <div class="Idarelab-Website-section-Block-Title">
                {translations[language].DraftingABrief}
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                {translations[language].DefiningProjectGoals}
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={One} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-red">
              <div class="Idarelab-Website-section-Block-Title">
                {translations[language].MarketingAnalysisAndPrototyping}
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                {translations[language].AnalyzingTheMarket}
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={two} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-orange">
              <div class="Idarelab-Website-section-Block-Title">
                {translations[language].WebsiteDesign}
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                {translations[language].WebsiteLayoutAndDevelopment}
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={three} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-purple">
              <div class="Idarelab-Website-section-Block-Title">
                {translations[language].WebsiteLayoutAndDevelopment}
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                {translations[language].CodingAndBuilding}
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={four} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-black">
              <div class="Idarelab-Website-section-Block-Title">
                {translations[language].LaunchOfTheWebsite}
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                {translations[language].MakingTheWebsite}
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={five} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
