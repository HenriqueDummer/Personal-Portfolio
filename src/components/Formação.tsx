import logoIfsul from "../assets/logo_ifsul.png";
import logoUdemy from "../assets/logo_udemy.png";
import { MotionEffect } from "./animate-ui/effects/motion-effect";

type Formação = {
  curso: string;
  instituição: string;
  ano: string;
}

const formaçõesAcadêmicas = [
  {
    curso: "Tecnologia em Sistemas para Internet",
    instituição: "Instituto Federal Sul-rio-grandense (IFSul)",
    ano: "2024 - Em andamento",
  },
  {
    curso: "Técnico em Mecatrônica",
    instituição: "Instituto Federal Sul-rio-grandense (IFSul)",
    ano: "2020 - 2023",
  },
];

const cursos = [
  {
    curso: "React - The Complete Guide",
    instituição: "Udemy",
    ano: "2024",
  },
  {
    curso: "React & TypeScript - A Parctical Guide",
    instituição: "Udemy",
    ano: "2025",
  },
];

const renderFormações = (formações : Formação[]) => {
  return formações.map((formação, index) => (
    <MotionEffect fade={true} zoom={true} inView={true} inViewMargin="-200px">
    <div key={index} className="flex items-center border-l-2 border-white mb-4">
      <img
        className="w-32 aspect-square"
        src={formação.instituição == "Udemy" ? logoUdemy : logoIfsul}
        alt="logo instituição"
      />
      <div>
        <h4 className="text-lg text-primary-font">{formação.curso}</h4>
        <p className="text-primary-font text-sm">{formação.instituição}</p>
        <p className="text-secondary-font text-sm">{formação.ano}</p>
      </div>
    </div>
    </MotionEffect>
  ));
};

const Formação = () => {
  return (
    <div className="w-full flex mt-20">
      <div className="flex flex-1">
        <div className="text-center">
          <h3 className="mt-10 text-2xl font-semibold text-slate-100 font-mono">
            &lt;Formação Acadêmica /&gt;
          </h3>
          <div className="mt-10 text-start">
            {renderFormações(formaçõesAcadêmicas)}
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="text-center">
          <h3 className="mt-10 text-2xl font-semibold text-slate-100 font-mono">
            &lt;Cursos /&gt;
          </h3>
          <div className="mt-10 text-start">
            {renderFormações(cursos)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formação;
