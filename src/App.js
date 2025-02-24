import logo from "./logo.svg";
import "./App.css";
import { Home } from "./component/home/Home";
import { Services } from "./component/services/Services";
import { Skills } from "./component/skills/Skills";
import { Portofilo } from "./component/portofilo/Portofilo";
import { Resume } from "./component/resume/Resume";
import { Contact } from "./component/contact/Contact";
import { Footer } from "./component/footer/Footer";
import { Header } from "./component/header/Header";
import ImgSlider from "./component/portofilo/ImgSlider";

function App() {
  return (
    <main className="main">
      {/* <ImgSlider /> */}
      <Header />
      <Home />
      {/* <Services /> */}
      <Skills />
      <Portofilo />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
