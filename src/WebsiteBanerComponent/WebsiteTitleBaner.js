import "./WebsiteTitleBaner.scss";

import Logo from "./Layer.png";

export const WebsiteTitleBaner = () => {
  return (
    <>
      <div class="Idarelab-title-Website-wrapper">
        <div class="Idarelab-title-Website-inner">
          <div class="Idarelab-title-Website-title">
            <span class="Word">Website</span>
            <img src={Logo} />
            <span class="Word">developing</span>
          </div>
          <div class="Idarelab-title-Website-desc">
            We offer flexible monthly subscription plans. Packages can be
            adjusted or upgraded at the end of each billing cycle to suit your
            needs.
          </div>
        </div>
      </div>
    </>
  );
};
