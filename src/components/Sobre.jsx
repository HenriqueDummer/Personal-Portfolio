import React from "react";
import devIcon from "../assets/dev_icon.png";

const Sobre = () => {
  return (
    <section
      id="Sobre"
      className="py-[5rem] bg-violet-900 flex flex-col items-center"
    >
      <h2 className="mt-10 text-4xl font-semibold text-slate-100">Sobre mim</h2>
      <div className="flex px-10 my-[10rem] justify-center items-center gap-20">
        <img className="w-[30rem]" src={devIcon} alt="" />
        <div className="max-w-[40rem]">
          <p className="text-slate-200 text-lg text-justify">
            Me chamo Henrique Dummer, tenho 19 anos e gosto muito de programar.
            Em 2020 entrei em contato com a programação pela primeira vez, no
            curso técnico de Mecatrônica, com a linguagem C++, achei aquilo
            muito divertido e cativante. Desde então comecei a estudar
            programação por conta, através de cursos online aprendi HTML, CSS e
            JavaScript a partir da construção de projetos. Ultimamente venho me
            especializando em React, também através de um curso online, e me
            familiarizando com algumas ferramentas populares, como Git,
            TailWind, Sass, Figma, ReactRouter e Redux.
          </p>
          <p className="text-slate-200 text-lg mt-8 text-justify">
            Estou atualmente cursando Tecnologia em Sistemas para Internet no
            IFSul e procuro uma primeira oportunidade para ingressar no mercado
            de trabalho como desenvolvedor Front End. Adoro resolver problemas e
            trabalhar em equipe, estou sempre procurando melhorar e aprender
            mais sobre essa área que tanto me fascina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
