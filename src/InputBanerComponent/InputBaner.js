import "./InputBaner.scss";

export const InputBaner = () => {
  return (
    <>
      <div class="IdareLab-Input-Baner-Wrapper">
        <div class="Idarelab-Input-Baner-Inner">
          <div class="IdareLab-Input-Baner-Title">
            <div class="IdareLab-Input-Baner-Title-Name">
              Do you have an idea? let’s discuss it!
            </div>
            <div class="IdareLab-Input-Baner-Title-Desc">
              Leave us a request, and we’ll get back to you as soon as possible.
              Together, we’ll bring your ideas to life!
            </div>
          </div>
          <div class="IdareLab-Input-Baner-Rigth-Slide">
            <div class="IdareLab-Input-Baner-Rigth-Slide-Input">
              <input placeholder="Your name" class="Input" />
            </div>
            <div class="IdareLab-Input-Baner-Rigth-Slide-Input">
              <input placeholder="Phone number" class="Input" />
            </div>
            <div class="IdareLab-Input-Baner-Rigth-Slide-Check">
              <div class="IdareLab-Input-Baner-Check">
                <img src="Rectangle.png" />
              </div>
              <div class="IdareLab-Input-Baner-Check-Opis">
                I agree to the terms of personal data processing.
              </div>
            </div>
            <button class="IdareLab-Input-Baner-Button">
              <span class="IdareLab-Input-Baner-Button-Word">Send</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
