import React from "react";

const ProjetoComponent = ({ text, title, img, link, inverted }) => {
  const projectInfos = (
    <div className="max-w-[47rem]">
      <h3 className="mb-10 text-2xl font-semibold text-slate-200">
        {title}
      </h3>
      <p className="text-slate-200 text-lg text-justify mb-8">{text}</p>
      <a
        href={link}
        target="_blank"
        className="px-8 py-2 bg-violet-800 rounded-lg text-slate-300 "
      >
        Visitar
        <i class="bi bi-box-arrow-up-right"></i>
      </a>
    </div>
  );

  return (
    <li className="flex justify-center items-center mb-24 gap-10">
      {inverted ? (
        <>
          <img className="w-[42rem]" src={img} alt="" />
          {projectInfos}
        </>
      ) : (
        <>
          {projectInfos}
          <img className="w-[42rem]" src={img} alt="" />
        </>
      )}
    </li>
  );
};

export default ProjetoComponent;
