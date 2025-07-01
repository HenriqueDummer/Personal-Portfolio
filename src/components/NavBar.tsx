import { Link, scrollSpy } from "react-scroll";
import Logo from "../assets/logo.png";
import { useEffect } from "react";
import curriculo from "../../public/Currículo_Henrique_Dummer.pdf";
import { Download } from "./animate-ui/icons/download";
import { AnimateIcon } from "./animate-ui/icons/icon";

const itemsClass =
  "text-base w-full text-secondary-font cursor-pointer relative hover:text-primary-font transition-all duration-200 " +
  "after:transition-all after:shadow-highlight after:w-0 after:duration-200 after:content-[''] after:block after:h-[4px] after:rounded-sm " +
  "after:bg-highlight after:absolute after:-bottom-2";

const activeClass = "text-white after:!w-full";

const NavBar = () => {
  useEffect(() => {
    scrollSpy.update(); // força o react-scroll a identificar a seção visível
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50">
      <div className="backdrop-blur-lg w-full h-full flex items-center justify-between px-20">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="h-full gap-10 flex items-center">
          {[
            { to: "inicio", label: "Início", offset: -100 },
            { to: "sobre", label: "Sobre", offset: -100 },
            { to: "projetos", label: "Projetos", offset: -100 },
            { to: "tecnologias", label: "Tecnologias", offset: -100 },
            { to: "contato", label: "Contato", offset: -100 },
          ].map(({ to, label, offset = 0 }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                className={itemsClass}
                activeClass={activeClass}
                isDynamic={true}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <AnimateIcon animateOnHover>
              <a
                href={curriculo}
                download={true}
                className="bg-highlight px-5 py-2 rounded-lg flex items-center justify-center text-primary-font gap-2 hover:text-highlight-font hover:shadow-highlight transition-all duration-200"
              >
                Currículo
                <Download size={22} />
              </a>
            </AnimateIcon>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
