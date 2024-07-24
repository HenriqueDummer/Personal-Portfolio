import React from "react";

const NavBar = () => {
  const itemsClass = "text-xl text-neutral-200";
  return (
    <nav>
      <ul className="w-full h-16 fixed flex items-center justify-center bg-zinc-800 gap-20">
        <li>
          <a className={itemsClass} href="#Sobre">
            Sobre
          </a>
        </li>
        <li>
          <a className={itemsClass} href="#Projetos">
            Projetos
          </a>
        </li>
        <li>
          <a className={itemsClass} href="#Tecnologias">
            Tecnologias
          </a>
        </li>
        <li>
          <a className={itemsClass} href="#Contato">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
