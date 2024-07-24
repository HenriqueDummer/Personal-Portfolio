import Hero from "./components/Hero"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Tecnologias from "./components/Tecnologias"
import Contato from "./components/Contato"
import NavBar from "./components/NavBar"

function App() {
  

  return (
    <>
      <NavBar />
      <main className="bg-slate-700">
        <Hero />
        <Sobre />
        <Projetos />
        <Tecnologias />
        <Contato />
      </main>
    </>
  )
}

export default App
