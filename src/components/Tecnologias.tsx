import StackIcon from "tech-stack-icons";
import { MagicCard } from "./magicui/magic-card";

const techStack = [
  {
    iconName: "html5",
    techName: "HTML",
  },
  {
    iconName: "css3",
    techName: "CSS",
  },
  {
    iconName: "js",
    techName: "JavaScript",
  },
  {
    iconName: "react",
    techName: "React",
  },
  {
    iconName: "typescript",
    techName: "TypeScript",
  },

  {
    iconName: "tailwindcss",
    techName: "TailWind",
  },
  {
    iconName: "git",
    techName: "Git",
  },
  {
    iconName: "github",
    techName: "Github",
  },
  {
    iconName: "sass",
    techName: "Sass",
  },
  {
    iconName: "figma",
    techName: "Figma",
  },
  {
    iconName: "vitejs",
    techName: "Vite",
  },
  {
    iconName: "reactquery",
    techName: "React Query",
  },
  {
    iconName: "nodejs",
    techName: "NodeJS",
  },
  {
    iconName: "expressjs",
    techName: "Express",
  },
  {
    iconName: "mongodb",
    techName: "MongoDB",
  },
  {
    iconName: "mysql",
    techName: "MySQL",
  },
];

const Tecnologias = () => {
  return (
    <section className="pb-10 flex items-center flex-col">
      <h2 className="mt-10 text-4xl font-semibold text-slate-100 font-mono">
        &lt;Tecnologias /&gt;
      </h2>

      <ul className="flex justify-center my-[8rem] max-w-[68rem] gap-4 flex-wrap">
        {techStack.map((tech) => (
          <li>
            <MagicCard className="rounded-lg !bg-secondary-bg">
              <div className="w-[175px] h-[120px] flex flex-col justify-center items-center text-slate-200 text-lg">
                <div className="w-12 aspect-square">
                  <StackIcon name={tech.iconName} variant="dark" />
                </div>
                <p className="text-secondary-font font-mono font-semibold text-sm">
                  {tech.techName}
                </p>
              </div>
            </MagicCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tecnologias;
