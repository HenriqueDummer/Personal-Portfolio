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
      <main className="bg-slate-700">
        <Element nome="home" id="home">
          <Hero />
        </Element>
        <Element nome="sobre" id="sobre">
          <Sobre />
        </Element>
        <Element nome="projetos" id="projetos">
          <Projetos />
        </Element>
        <Element nome="tecnologias" id="tecnologias">
          <Tecnologias />
        </Element>
        <Element nome="contato" id="contato">
          <Contato />
        </Element>
      </main>
      <Analytics />
    </>
  );
}

export default App;
