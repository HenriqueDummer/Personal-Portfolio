import StackIcon from "tech-stack-icons";
import { IoOpenOutline } from "react-icons/io5";

const ProjetoComponent = ({ text, title, img, link, inverted, techIcons }) => {
  const projectInfos = (
    <div className="max-w-[47rem] flex flex-col items-start justify-start">
      <h3 className="text-2xl font-semibold text-slate-200">{title}</h3>
      <ul className="flex gap-3 mt-2">
        {techIcons &&
          techIcons.map((icon, indx) => (
            <StackIcon name={icon} variant="dark" key={indx} className="w-8" />
          ))}
      </ul>
      <p className="mt-6 text-slate-200 text-lg font-light text-justify">{text}</p>

      <a
        href={link}
        target="_blank"
        className="px-6 py-2 bg-violet-800 rounded-lg text-slate-300 mt-4 flex items-center gap-3"
      >
        Visitar
       <IoOpenOutline className="text-lg" />
      </a>
    </div>
  );

  return (
    <li
      className={`flex justify-center items-center mb-24 gap-10 ${
        inverted ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <>
        <img className="w-[42rem] rounded-xl" src={img} alt="" />
        {projectInfos}
      </>
    </li>
  );
};

export default ProjetoComponent;
