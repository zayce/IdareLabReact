import "./RainbowBaner.scss";

import First from "./First.png";
import Second from "./Second.png";
import Third from "./Third.png";

export const RainbowBaner = () => {
  return (
    <>
      <div class="IdareLab-Rainbow-Baner-wrapper">
        <div class="IdareLab-Rainbow-Baner-Inner">
          <div class="IdareLab-Rainbow-Baner-FirstBLock">
            <div class="IdareLab-Rainbow-Baner-FirstBLock-Opis">
              <div class="IdareLab-Rainbow-Baner-FirstBLock-Opis-Name">
                Experienced Team of Professionals
              </div>
              <div class="IdareLab-Rainbow-Baner-FirstBLock-Opis-Desc">
                Our team consists of skilled programmers, designers, video
                editors, and photographers who bring years of hands-on
                experience to every project. We combine creativity and technical
                expertise to deliver outstanding results.
              </div>
            </div>
            <div class="IdareLab-Rainbow-Baner-FirstBLock-Opis-Img">
              <img src={First} />
            </div>
          </div>
          <div class="IdareLab-Rainbow-Baner-SecondBLock">
            <div class="IdareLab-Rainbow-Baner-SecondBLock-Opis">
              <div class="IdareLab-Rainbow-Baner-SecondBLock-Opis-Name">
                Client-Oriented Approach
              </div>
              <div class="IdareLab-Rainbow-Baner-SecondBLock-Opis-Desc">
                We prioritize your needs and vision. By focusing on personalized
                solutions and open communication, we ensure that each project
                aligns with your goals and exceeds your expectations.
              </div>
            </div>
            <div class="IdareLab-Rainbow-Baner-SecondBLock-Opis-Img">
              <img src={Second} />
            </div>
          </div>
          <div class="IdareLab-Rainbow-Baner-ThirdBLock">
            <div class="IdareLab-Rainbow-Baner-ThirdBLock-Opis">
              <div class="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Name">
                Proven Quality and Reliability
              </div>
              <div class="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Desc">
                With a strong background working in top companies and real-world
                projects, we know how to deliver high-quality work on time.
                Trust us to provide reliable solutions that make a lasting
                impact.
              </div>
            </div>
            <div class="IdareLab-Rainbow-Baner-ThirdBLock-Opis-Img">
              <img src={Third} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
