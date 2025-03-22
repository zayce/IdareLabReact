import { useMyContext } from "../UseContext";
import "./ContactsBaner.scss";

import Inst from "./Inst.png";
import Logo from "./LogoContacts.png";
import TT from "./TT.png";
import Wp from "./Wp.png";

export const ContactBaner = () => {
  const { translations, language } = useMyContext();
  return (
    <>
      <div className="Idarelab-Contacts-Baner-Wrapper">
        <div className="Idarelab-Contacts-Baner-Inner">
          <div className="Idarelab-Contacts-Baner">
            <div className="Idarelab-Contacts-Baner-Name">
              {translations[language].Contacts}
            </div>
            <div className="Idarelab-Contacts-Baner-Name-Phone">
              <div className="Idarelab-Contacts-Baner-Phone">
                {translations[language].Contacts}
              </div>
              <div className="Idarelab-Contacts-Baner-Number">
                +994 50 444 54 14 / +994 50 394 55 68
              </div>
            </div>
            <div className="Idarelab-Contacts-Baner-Email-Account">
              <div className="Idarelab-Contacts-Baner-Email">
                {translations[language].EMail}
              </div>
              <div className="Idarelab-Contacts-Baner-Account">
                idarelab@gmail.com
              </div>
            </div>
            <div className="Idarelab-Contacts-Baner-Foto-Social-Media">
              <div className="Idarelab-Contacts-Baner-foto-Name">
                {translations[language].WeInSocialNetworks}
              </div>
              <div className="Idarelab-Contacts-Baner-SocialMedia">
                <div className="Idarelab-Contacts-Baner-Media">
                  <img src={Wp} />
                </div>
                <div className="Idarelab-Contacts-Baner-Media">
                  <img src={TT} />
                </div>
                <div className="Idarelab-Contacts-Baner-Media">
                  <img src={Inst} />
                </div>
              </div>
            </div>
          </div>
          <div className="IdareLab-Create-Baner-Logo">
            <img src={Logo} />
          </div>
        </div>
      </div>
    </>
  );
};
