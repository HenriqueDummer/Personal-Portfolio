import React from "react";
import heroImg from "../assets/hero.jpg";
import gmailIcon from "../assets/gmail.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="text-slate-200 bg-zinc-800 flex justify-center gap-[18rem] items-center min-h-screen">
      <div className="w-[30rem]">
        <h1 className="text-2xl leading-snug">
          Olá, eu sou
          <br />
          {" "}
          <span className="font-bold text-violet-800 text-[44px]">Henrique Dummer</span>
        </h1>
        <p className="text-slate-300 text-lg my-6">
          Um desenvolvedor{" "}
          <span className="text-violet-700 font-semibold">front end</span>{" "}
          apaixonado pelo mundo da tecnologia, que adora resolver problemas e
          criar boas experiências para os usuários.
        </p>
         <Link
            to="contato"
            spy={true}
            smooth={true}
            duration={500}
            className="flex w-44 px-2 bg-violet-800 rounded-lg py-1 justify-center items-center text-lg cursor-pointer gap-1"
          >
          Fale comigo
          <img className="w-8" src={gmailIcon} alt="" />
        </Link>
        {/* <a
          href="https://criarmeulink.com.br/u/1721151189"
          target="_blank"
          className="flex w-44 px-2 bg-violet-800 rounded-lg py-1 justify-center items-center text-lg cursor-pointer gap-1"
        >
          Fale comigo
          <img className="w-8" src={gmailIcon} alt="" />
        </a> */}
      </div>
      <div>
        <img className="w-[30rem] rounded-2xl" src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
