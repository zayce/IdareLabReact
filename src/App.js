import "./App.css";
import { Header } from "./HeaderComponent/HeaderComponent";
import { ServiceSection } from "./ServiceSectionComponent/ServiceSection";
import { SmmPakets } from "./SmmPaketsComponent/SmmPakets";
import { CreateBaner } from "./CreateBanerComponent/CreateBaner";
import { IndividualBaner } from "./IndividualBanerComponent/IndividualBaner";
import { AboutUs } from "./AboutUsComponent/AboutUs";
import { Footer } from "./Footer/Footer";
import { RainbowBaner } from "./RainbowBanerComponent/RainbowBaner";
import { InputBaner } from "./InputBanerComponent/InputBaner";
import { ContactBaner } from "./ContactsBanerCompanent/ContactsBaner";
import { WebsiteTitleBaner } from "./WebsiteBanerComponent/WebsiteTitleBaner";
import { WebSecBlock } from "./WebsiteBanerComponent/WebSecBlock";
import { MyProvider } from "./UseContext";

export const App = () => {
  return (
    <>
      <MyProvider>
        <Header />
        <ServiceSection />
        <SmmPakets />
        <WebsiteTitleBaner />
        <WebSecBlock />
        <CreateBaner />
        <IndividualBaner />
        <AboutUs />
        <RainbowBaner />
        <InputBaner />
        <ContactBaner />
        <Footer />
      </MyProvider>
    </>
  );
};
