import "./ContactsBaner.scss";

import Inst from "./Inst.png";
import Logo from "./LogoContacts.png";
import TT from "./TT.png";
import Wp from "./Wp.png";

export const ContactBaner = () => {
  return (
    <>
      <div class="Idarelab-Contacts-Baner-Wrapper">
        <div class="Idarelab-Contacts-Baner-Inner">
          <div class="Idarelab-Contacts-Baner">
            <div class="Idarelab-Contacts-Baner-Name">Contacts</div>
            <div class="Idarelab-Contacts-Baner-Name-Phone">
              <div class="Idarelab-Contacts-Baner-Phone">Phone</div>
              <div class="Idarelab-Contacts-Baner-Number">
                +994 50 444 54 14 / +994 50 394 55 68
              </div>
            </div>
            <div class="Idarelab-Contacts-Baner-Email-Account">
              <div class="Idarelab-Contacts-Baner-Email">E-mail</div>
              <div class="Idarelab-Contacts-Baner-Account">
                idarelab@gmail.com
              </div>
            </div>
            <div class="Idarelab-Contacts-Baner-Foto-Social-Media">
              <div class="Idarelab-Contacts-Baner-foto-Name">
                We in social networks
              </div>
              <div class="Idarelab-Contacts-Baner-SocialMedia">
                <div class="Idarelab-Contacts-Baner-Media">
                  <img src={Wp} />
                </div>
                <div class="Idarelab-Contacts-Baner-Media">
                  <img src={TT} />
                </div>
                <div class="Idarelab-Contacts-Baner-Media">
                  <img src={Inst} />
                </div>
              </div>
            </div>
          </div>
          <div class="IdareLab-Create-Baner-Logo">
            <img src={Logo} />
          </div>
        </div>
      </div>
    </>
  );
};
