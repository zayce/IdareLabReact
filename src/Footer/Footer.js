import "./Footer.scss";

import FLogo from "./FooterLogo.png";
import WI from "./WhiteInst.png";
import Wp from "./WhiteWp.png";
import WTT from "./WhiteTT.png";

export const Footer = () => {
  return (
    <>
      <div class="IdareLab-Footer-Wrapper">
        <div class="IdareLab-Footer-Inner">
          <div class="IdareLab-Footer-Logo">
            <img src={FLogo} />
          </div>
          <div class="IdareLab-Footer-Navigation">
            <div class="IdareLab-Footer-Phone">
              +994 50 444 54 14 / +994 50 394 55 68
            </div>
            <div class="IdareLab-Footer-Email">idarelab@gmail.com</div>
            <div class="IdareLab-Footer-Year">2024</div>
          </div>
          <div class="IdareLab-Footer-Social">
            <div class="IdareLab-Footer-Medias">
              <div class="IdareLab-Footer-Media">
                <img src={Wp} />
              </div>
              <div class="IdareLab-Footer-Media">
                <img src={WTT} />
              </div>
              <div class="IdareLab-Footer-Media">
                <img src={WI} />
              </div>
            </div>
            <div class="IdareLab-Footer">All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
};
