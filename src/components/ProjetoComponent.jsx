import React from "react";

const ProjetoComponent = ({ text, title, img, link, inverted, techIcons }) => {
  const projectInfos = (
    <div className="max-w-[47rem] flex flex-col items-start justify-start">
      <h3 className="text-2xl font-semibold text-slate-200">{title}</h3>
      <p className="mt-10 text-slate-200 text-lg text-justify">{text}</p>
      <ul className="flex gap-2 mt-6">
        {techIcons &&
          techIcons.map((icon, indx) => (
            <img src={icon} key={indx} className="w-10" />
          ))}
      </ul>
      <a
        href={link}
        target="_blank"
        className="px-8 py-2 bg-violet-800 rounded-lg text-slate-300 mt-4"
      >
        Visitar
        <i class="bi bi-box-arrow-up-right"></i>
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
