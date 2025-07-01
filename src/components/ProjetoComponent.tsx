import StackIcon from "tech-stack-icons";
import githubLogo from "../assets/github.png";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { SquareArrowOutUpRight } from "./animate-ui/icons/square-arrow-out-up-right";
import { AnimateIcon } from "./animate-ui/icons/icon";

type ProjetoComponentProps = {
  text: string;
  title: string;
  img: string;
  link: string;
  linkGithub: string;
  inverted?: boolean;
  techIcons: string[];
};

const ProjetoComponent = ({
  text,
  title,
  img,
  link,
  linkGithub,
  inverted,
  techIcons,
}: ProjetoComponentProps) => {
  const projectInfos = (
    <div className="max-w-[47rem] flex flex-col items-start justify-start pr-5">
      <h3 className="text-xl font text-slate-200">{title}</h3>
      <ul className="flex gap-1 mt-2">
        {techIcons &&
          techIcons.map((icon, indx) => (
            <StackIcon name={icon} variant="dark" key={indx} className="w-6" />
          ))}
      </ul>
      <p className="mt-3 text-slate-200 text-sm font-light text-justify">
        {text}
      </p>
      <div className="flex items-center gap-2">
        <a
          href={linkGithub}
          target="_blank"
          className="px-4 py-1 text-sm font-light transition-all duration-200 border border-highlight rounded-sm text-primary-font mt-4 flex items-center gap-3 hover:bg-highlight"
        >
          Código
          <img
            src={githubLogo}
            alt="github logo"
          />
        </a>

        <AnimateIcon animateOnHover>
          <a
            href={link}
            target="_blank"
            className="px-4 py-1 text-sm font-light transition-all duration-200 hover:bg-highlight border border-highlight rounded-sm text-primary-font mt-4 flex items-center gap-3"
          >
            Visitar
            <SquareArrowOutUpRight size={18} />
          </a>
        </AnimateIcon>
      </div>
    </div>
  );

  return (
    <MotionEffect
      slide={{ direction: inverted ? "right" : "left" }}
      fade={true}
      inView={true}
      inViewMargin="-200px"
    >
      <li
        className={`w-full bg-[#070917] px-10 py-6 flex gap-10 items-center rounded-xl overflow-hidden justify-between relative mb-6  z-10 ${
          inverted ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <>
          <img
            className="w-[480px] rounded-xl shadow-highlight"
            src={img}
            alt=""
          />
          {projectInfos}
          <div
            className={`absolute top-0 ${
              !inverted ? "right-0" : "left-0"
            } w-2 h-full bg-highlight shadow-highlight`}
          ></div>
        </>
      </li>
    </MotionEffect>
  );
};

export default ProjetoComponent;
