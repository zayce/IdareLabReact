import "./WebSecBlock.scss";

import One from "./WebAsessts/01.png";
import two from "./WebAsessts/02.png";
import three from "./WebAsessts/03.png";
import four from "./WebAsessts/04.png";
import five from "./WebAsessts/05.png";
import Time from "./WebAsessts/timeline.png";

export const WebSecBlock = () => {
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
                Drafting a brief
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                Defining project goals, target audience, and key requirements
                for the website.
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={One} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-red">
              <div class="Idarelab-Website-section-Block-Title">
                Marketing analysis and prototyping
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                Analyzing the market and designing a website prototype.
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={two} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-orange">
              <div class="Idarelab-Website-section-Block-Title">
                Website design
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                Creating the website's visual design.
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={three} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-purple">
              <div class="Idarelab-Website-section-Block-Title">
                Website layout and development.
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
                Coding and building the website's functionality.
              </div>
              <div class="Idarelab-Website-section-Block-Number">
                <img src={four} />
              </div>
            </div>
            <div class="Idarelab-Website-section-Block-black">
              <div class="Idarelab-Website-section-Block-Title">
              Launch of the website
              </div>
              <div class="Idarelab-Website-section-Block-Opis">
              Making the website live and ready for users.
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
