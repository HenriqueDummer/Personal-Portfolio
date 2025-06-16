import StackIcon from "tech-stack-icons";

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
  const itemsClass =
    "flex flex-col justify-center items-center gap-4 text-slate-200 text-lg";
  return (
    <section className="py-[5rem] bg-zinc-900 flex items-center flex-col">
      <h2 className="mt-8 text-4xl font-semibold text-slate-200">
        Tecnologias
      </h2>
      <ul className="flex justify-center my-[8rem] max-w-[68rem] gap-10 flex-wrap">
        {techStack.map((tech) => (
          <li className={itemsClass}>
            <div className="w-28 aspect-square">
              <StackIcon name={tech.iconName} variant="dark" />
            </div>
            <p>{tech.techName}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tecnologias;
