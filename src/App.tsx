import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Tecnologias from "./components/Tecnologias";
import Contato from "./components/Contato";
import NavBar from "./components/NavBar";
import { Element } from "react-scroll";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <NavBar />
      <main className="bg-dark-bg flex justify-center">
        <div className="w-full max-w-[1200px] mt-5">
          <Element name="inicio" id="inicio">
            <Hero />
          </Element>
          <Element name="sobre" id="sobre">
            <Sobre />
          </Element>
          <Element name="projetos" id="projetos">
            <Projetos />
          </Element>
          <Element name="tecnologias" id="tecnologias">
            <Tecnologias />
          </Element>
          <Element name="contato" id="contato">
            <Contato />
          </Element>
        </div>
      </main>
      <Analytics />
    </>
  );
}

export default App;
