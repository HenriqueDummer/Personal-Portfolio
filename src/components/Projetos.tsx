import ProjectVibeLink from "../assets/project_vibelink.png";
import ProjectMovies from "../assets/project_movies.png";
import ProjetoComponent from "./ProjetoComponent";
import ProjectBookNest from "../assets/project_booknest.png";

const Projetos = () => {
  return (
    <section className="py-[5rem] flex justify-center items-center flex-col min-h-screen">
      <h2 className="mt-10 text-4xl font-semibold text-slate-100 font-mono">
        &lt;Projetos /&gt;
      </h2>
      <ul className="mt-[8rem] w-full">
        <ProjetoComponent
          text="Um aplicativo de rede social que permite aos usuários criar contas, personalizar
perfis com foto de usuário e capa, além de criar posts com imagens, seguir outros usuários, curtir,
repostar e comentar em publicações. Oferece funcionalidades de busca para encontrar usuários ou
posts, proporcionando uma experiência interativa e dinâmica"
          techIcons={[
            "vitejs",
            "react",
            "reactquery",
            "typescript",
            "tailwindcss",
            "git",
            "nodejs",
            "expressjs",
            "mongodb",
          ]}
          title="VibeLink"
          img={ProjectVibeLink}
          link="https://vibe-link-three.vercel.app"
          linkGithub="https://github.com/HenriqueDummer/SocialMediaApp"
        />

        <ProjetoComponent
          text="Um aplicativo web para rastreamento de leituras, permitindo que usuários criem
contas, adicionem livros com detalhes como capa, título e autor, e gerenciem o status de suas leituras
(lendo, quero ler, lido). O projeto oferece uma interface intuitiva com navegação por páginas específicas
para cada status de leitura, proporcionando uma experiência organizada e amigável. "
          title="BookNest"
          techIcons={[
            "vitejs",
            "react",
            "reactquery",
            "typescript",
            "tailwindcss",
            "git",
            "nodejs",
            "expressjs",
            "mongodb",
          ]}
          inverted={true}
          img={ProjectBookNest}
          link="https://book-nest-topaz.vercel.app"
          linkGithub="https://github.com/HenriqueDummer/BookNest"
        />
        <ProjetoComponent
          text="Um site simulando um serviço de streaming utilizando a API do The Movie Database (TMDB). O site oferece uma interface intuitiva e amigável, permitindo aos usuários pesquisar por títulos específicos, explorar diversos gêneros e aplicar filtros para encontrar conteúdo de seu interesse."
          title="Movie website"
          techIcons={["react", "sass", "git", "reactquery"]}
          img={ProjectMovies}
          link="https://netflix-clone-ten-fawn-52.vercel.app"
          linkGithub="https://github.com/HenriqueDummer/Netflix-Clone"
        />
      </ul>
    </section>
  );
};

export default Projetos;
