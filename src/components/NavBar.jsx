import React from "react";
import { Link } from "react-scroll";

const activeClass = "[&>div]:w-full";
const itemsClass = "text-xl w-full text-neutral-200 cursor-pointer relative";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0">
      <ul className="w-full h-16 fixed flex items-center justify-center bg-zinc-800 gap-20">
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
      </ul>
    </nav>
  );
};

export default NavBar;
