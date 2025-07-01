import devIcon from "../assets/dev_icon.png";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import Formação from "./Formação";

const pClass = "text-primary-font font-light mb-5 text-justify";

const Sobre = () => {
  return (
    <section className="my-5 w-full flex flex-col items-center min-h-screen">
      <h2 className="mt-10 text-4xl font-semibold text-slate-100 font-mono">
        &lt;Sobre /&gt;
      </h2>
      <div className="flex mt-[10rem] justify-center items-center gap-32">
        <MotionEffect slide={{ direction: "down" }} fade={true} zoom={true} inView={true}>
          <img className="w-[30rem]" src={devIcon} alt="" />
        </MotionEffect>

        <div className="max-w-[40rem]">
          <p className={pClass}>
            Olá! Me chamo Henrique Dummer, tenho 20 anos e sou estudante de
            Tecnologia em Sistemas para Internet no IFSul. Sou apaixonado por
            tecnologia e desenvolvimento web, e venho construindo minha jornada
            com muita dedicação e curiosidade.
          </p>
          <p className={pClass}>
            Meu primeiro contato com a programação foi em 2020, durante o curso
            técnico em Mecatrônica, onde aprendi a linguagem C. Desde então, me
            encantei pela área e comecei a estudar por conta própria. Iniciei
            com a famosa tríade HTML, CSS e JavaScript, e, com o tempo, decidi
            me aprofundar em React e TypeScript, por meio de cursos na Udemy.
          </p>
          <p className={pClass}>
            Para consolidar meus conhecimentos, desenvolvi projetos pessoais
            aplicando conceitos de boas práticas e clean code, sempre buscando
            escrever códigos mais organizados, legíveis e eficientes. Sou movido
            por desafios e gosto de transformar problemas em soluções através do
            código.
          </p>
          <p className={pClass}>
            Estou em busca da minha primeira oportunidade como desenvolvedor
            Front End, com o objetivo de crescer profissionalmente, aprender com
            pessoas experientes e contribuir com projetos reais. Tenho
            facilidade para trabalhar em equipe, sou proativo, curioso e
            comprometido com o meu desenvolvimento contínuo.
          </p>
        </div>
      </div>
      <Formação />
    </section>
  );
};

export default Sobre;
