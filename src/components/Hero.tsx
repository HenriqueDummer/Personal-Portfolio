import heroImg from "../assets/hero.png";
import gmailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedIn.png";
import githubIcon from "../assets/github.png";
import { TypingText } from "./animate-ui/text/typing";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { HighlightText } from "./animate-ui/text/highlight";

const Hero = () => {
  return (
    <section className="text-slate-200 w-full flex justify-center items-center min-h-screen">
      <div className="w-[30rem]">
        <h1 className="text-3xl leading-snug text-primary-font font-light">
          <span className="text-4xl">👋</span>
          Olá, eu sou
          <br />
          <TypingText
            className="font-bold text-highlight text-[44px]"
            text="Henrique Dummer"
            cursor={true}
          />
        </h1>
        <p className="text-primary-font font-light text-lg mt-2">
          Um desenvolvedor <HighlightText className="font-semibold" delay={1300} text="front-end" /> {" "}
          que adora encarar novos desafios e aprender novas tecnologias
        </p>
        <ul className="flex gap-1 items-center">
          <li>
            <a href="https://github.com/HenriqueDummer" target="_blank">
              <img src={githubIcon} alt="github icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/henrique-dummer-725a1a239/"
              target="_blank"
            >
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
      <MotionEffect slide={{ direction: "left" }} fade={true} zoom={true}>
        <img className="w-[40rem] rounded-2xl" src={heroImg} alt="" />
      </MotionEffect>
    </section>
  );
};

export default Hero;
