import React from "react";
import heroImg from "../assets/hero.png";
import gmailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedIn.png";
import githubIcon from "../assets/github.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="text-slate-200 bg-dark-bg flex justify-center items-center min-h-screen px-10">
      <div className="w-[30rem]">
        <h1 className="text-3xl leading-snug text-primary-font font-light">
          <span className="text-4xl">👋</span>
         Olá, eu sou
          <br />
          <span className="font-bold text-primary text-[44px]">
            Henrique Dummer
          </span>
        </h1>
        <p className="text-primary-font font-light text-lg mt-2">
          Um desenvolvedor <span className="text-primary font-semibold">front-end</span> que adora encarar novos desafios e aprender novas tecnologias
        </p>
        <ul className="flex gap-1 items-center">
          <li>
            <a href="https://github.com/HenriqueDummer" target="_blank">
              <img src={githubIcon} alt="github icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/henrique-dummer-725a1a239/" target="_blank">
              <img src={linkedinIcon} alt="github icon" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={gmailIcon} alt="github icon" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img className="w-[40rem] rounded-2xl" src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
