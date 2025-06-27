import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { HiOutlineDownload } from "react-icons/hi";

const activeClass = "[&>div]:w-full";
const itemsClass = "text-base w-full text-secondary-font cursor-pointer relative hover:text-primary-font transition-all duration-200";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20">
      <div className="bg-dark-bg w-full h-full flex items-center justify-between px-20">
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="h-full gap-10 flex items-center">
          <li>
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              duration={500}
              className={itemsClass}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="sobre"
              spy={true}
              smooth={true}
              duration={500}
              className={itemsClass}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="projetos"
              spy={true}
              offset={-20}
              smooth={true}
              duration={500}
              className={itemsClass}
            >
              <a className={itemsClass} href="#projetos">
                Projetos
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="tecnologias"
              spy={true}
              offset={-20}
              smooth={true}
              duration={500}
              className={itemsClass}
            >
              <a className={itemsClass} href="#tecnologias">
                Tecnologias
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="contato"
              spy={true}
              smooth={true}
              duration={500}
              className={itemsClass}
            >
              <a className={itemsClass} href="#contato">
                Contato
              </a>
            </Link>
          </li>
          <li>
            <button className="bg-primary px-5 py-2 rounded-lg flex items-center justify-center text-primary-font font-light gap-2 hover:text-primary-font hover:shadow-primary  transition-all duration-200">
              Currículo <HiOutlineDownload className="text-xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
