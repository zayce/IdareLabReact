import "./SmmPakets.scss";
import { useMyContext } from "../UseContext";

export const SmmPakets = () => {
  const { translations, language } = useMyContext();

  return (
    <>
      <div class="IdareLab-Smm-Packages-wrapper">
        <div class="IdareLab-Smm-Packages-inner">
          <div class="IdareLab-Smm-Packages-Left-Sides">
            <div class="IdareLab-Smm-Packages-Left-Sides-Title">
              {translations[language].SMMPackages}
            </div>
            <div class="IdareLab-Smm-Packages-Left-Sides-Desc">
               {translations[language].SmmText}
            </div>
            <div class="IdareLab-Smm-Packages-comment">
              {translations[language].SmmComments1}
            </div>
            <div class="IdareLab-Smm-Packages-comment">
            {translations[language].SmmComments2}
            </div>
          </div>
          <div class="IdareLab-Smm-Packages-Right-Sides">
            <div class="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                {translations[language].StarterPackage}
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span class="Posts">{translations[language].GraphicPosts}</span>
                  <span class="Count">8</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span class="Reels">{translations[language].Reels}</span>
                  <span class="Count">7</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span class="SMM">{translations[language].SMM}</span>
                  <span class="Count">{translations[language].monthly}</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span class="Target">{translations[language].Target}</span>
                  <span class="Count">1</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span class="Motion-grey">{translations[language].MotionPosts}</span>
                  <span class="count-grey">0</span>
                </div>
              </div>
              <button class="Button-Choose">
                <span class="word-button">{translations[language].Choose}</span>
              </button>
            </div>
            <div class="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                  {translations[language].GrowthPackage}
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span class="Posts">{translations[language].GraphicPosts}</span>
                  <span class="Count">10</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span class="Reels">{translations[language].Reels}</span>
                  <span class="Count">10</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span class="SMM">{translations[language].SMM}</span>
                  <span class="Count">{translations[language].monthly}</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span class="Target">{translations[language].Target}</span>
                  <span class="Count">1</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span class="Motion">{translations[language].MotionPosts}</span>
                  <span class="count">1</span>
                </div>
              </div>
              <button class="Button-Choose">
                <span class="word-button">{translations[language].Choose}</span>
              </button>
            </div>

            <div class="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                {translations[language].ProPackage}
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span class="Posts">{translations[language].GraphicPosts}</span>
                  <span class="Count">16</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span class="Reels">{translations[language].Reels}</span>
                  <span class="Count">12</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span class="SMM">{translations[language].SMM}</span>
                  <span class="Count">{translations[language].monthly}</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span class="Target">{translations[language].Target}</span>
                  <span class="Count">3</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span class="Motion">{translations[language].MotionPosts}</span>
                  <span class="count">3</span>
                </div>
              </div>
              <button class="Button-Choose">
                <span class="word-button">{translations[language].Choose}</span>
              </button>
            </div>

            <div class="IdareLab-Smm-Packages-Right-Sides-Pack">
              <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Opis">
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Name">
                {translations[language].ElitePackage}
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Posts">
                  <span class="Posts">{translations[language].GraphicPosts}</span>
                  <span class="Count">20</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Reeals">
                  <span class="Reels">{translations[language].Reels}</span>
                  <span class="Count">14</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-time">
                  <span class="SMM">{translations[language].SMM}</span>
                  <span class="Count">{translations[language].monthly}</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Target">
                  <span class="Target">{translations[language].Target}</span>
                  <span class="Count">5</span>
                </div>
                <div class="IdareLab-Smm-Packages-Right-Sides-Pack-Motion">
                  <span class="Motion">{translations[language].MotionPosts}</span>
                  <span class="count">6</span>
                </div>
              </div>

              <button class="Button-Choose">
                <span class="word-button">{translations[language].Choose}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
