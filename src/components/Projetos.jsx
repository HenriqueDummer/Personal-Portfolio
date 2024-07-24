import React from "react";
import ProjectTodo from "../assets/project_todo.png";
import ProjectWeathercast from "../assets/project_weathercast.png";
import ProjectMovies from "../assets/project_movies.png";
import ProjetoComponent from "./ProjetoComponent";

const Projetos = () => {
  return (
    <section id="Projetos" className="py-[5rem] bg-zinc-900 flex justify-center items-center flex-col">
      <h2 className="mt-10 text-4xl font-semibold text-slate-200">Projetos</h2>
      <ul className="mt-[10rem] px-28">
        <ProjetoComponent
          text="Um site simulando um serviço de streaming utilizando a API do The Movie Database (TMDB), onde os usuários podem assistir filmes e séries. O site oferece uma interface intuitiva e amigável, permitindo aos usuários pesquisar por títulos específicos, explorar diversos gêneros e aplicar filtros para encontrar conteúdo de seu interesse."
          title="Movie website"
          img={ProjectMovies}
          link="https://netflix-clone-rv9j-4u2b0hy67-henriquedummers-projects.vercel.app"
        />
        <ProjetoComponent
          text="Site de previsão do tempo que permite aos usuários obter informações meteorológicas detalhadas para qualquer cidade de interesse. Utilizando uma API de previsão do tempo, o site fornece dados atualizados sobre as condições climáticas atuais, bem como previsões para os próximos dias."
          title="Weather Forecast"
          img={ProjectWeathercast}
          inverted={true}
          link="https://weather-app-pearl-kappa.vercel.app"
        />
        <ProjetoComponent
          text="Um site de lista de tarefas que permite aos usuários organizar suas atividades diárias de forma eficiente. O site permite que os usuários anotem suas tarefas, dividam-nas em diferentes categorias e marquem as tarefas concluídas com um simples clique."
          title="Todo App"
          img={ProjectTodo}
          link="https://to-do-app-one-smoky.vercel.app"
        />
      </ul>
    </section>
  );
};

export default Projetos;
