import React from "react";
import ProjectVibeLink from "../assets/project_vibelink.png";
import ProjectMovies from "../assets/project_movies.png";
import ProjetoComponent from "./ProjetoComponent";
import ProjectBookNest from "../assets/project_booknest.png";

import reactIcon from "../assets/React.png";
import tailwindIcon from "../assets/TailwindCSS.png";
import gitIcon from "../assets/Git.png";
import nodeIcon from "../assets/Node.png";
import expressIcon from "../assets/Express.png";
import reactQueryIcon from "../assets/ReactQuery.webp";
import sassIcon from "../assets/Sass.png";

const Projetos = () => {
  return (
    <section
      className="py-[5rem] bg-zinc-900 flex justify-center items-center flex-col min-h-screen"
    >
      <h2 className="mt-10 text-4xl font-semibold text-slate-200">Projetos</h2>
      <ul className="mt-[10rem] px-28">
        <ProjetoComponent
          text="Um aplicativo de rede social que permite aos usuários criar contas, personalizar
perfis com foto de usuário e capa, além de criar posts com imagens, seguir outros usuários, curtir,
repostar e comentar em publicações. Oferece funcionalidades de busca para encontrar usuários ou
posts, proporcionando uma experiência interativa e dinâmica"
          techIcons={[
            reactIcon,
            tailwindIcon,
            gitIcon,
            nodeIcon,
            expressIcon,
            reactQueryIcon,
          ]}
          title="VibeLink"
          img={ProjectVibeLink}
          link="https://vibe-link-three.vercel.app"
        />

        <ProjetoComponent
          text="Um aplicativo web para rastreamento de leituras, permitindo que usuários criem
contas, adicionem livros com detalhes como capa, título e autor, e gerenciem o status de suas leituras
(lendo, quero ler, lido). O projeto oferece uma interface intuitiva com navegação por páginas específicas
para cada status de leitura, proporcionando uma experiência organizada e amigável. "
          title="BookNest"
          techIcons={[
            reactIcon,
            tailwindIcon,
            gitIcon,
            nodeIcon,
            expressIcon,
            reactQueryIcon,
          ]}
          inverted={true}
          img={ProjectBookNest}
          link="https://book-nest-topaz.vercel.app"
        />
        <ProjetoComponent
          text="Um site simulando um serviço de streaming utilizando a API do The Movie Database (TMDB), onde os usuários podem assistir filmes e séries. O site oferece uma interface intuitiva e amigável, permitindo aos usuários pesquisar por títulos específicos, explorar diversos gêneros e aplicar filtros para encontrar conteúdo de seu interesse."
          title="Movie website"
          techIcons={[
            reactIcon,
            sassIcon,
            gitIcon,
            reactQueryIcon,
          ]}
          img={ProjectMovies}
          link="https://netflix-clone-rv9j-4u2b0hy67-henriquedummers-projects.vercel.app"
        />
      </ul>
    </section>
  );
};

export default Projetos;
