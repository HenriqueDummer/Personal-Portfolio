import React from "react";
import gmailIcon from "../assets/gmail.png";
import instagramIcon from "../assets/instagram.png";
import whatsAppIcon from "../assets/whatsapp.png";

const Contato = () => {
  return (
    <section id="Contato" className="py-[5rem] bg-zinc-900 flex items-center flex-col">
      <h2 className="mt-10 text-4xl font-semibold text-slate-200">
        Entre em Contato
      </h2>
      <ul className="my-[10rem] max-w-[50rem] flex flex-wrap justify-center gap-10">
        <li>
          <a
            href="https://criarmeulink.com.br/u/1721151189"
            target="_blank"
            className="flex px-4 py-1 rounded-xl justify-center items-center text-slate-200 text-lg gap-2 bg-violet-800"
          >
            <img className="w-10" src={gmailIcon} alt="" />
            henriquedummer01@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/henriquedummer05/"
            target="_blank"
            className="flex px-4 py-1 rounded-xl justify-center items-center text-slate-200 text-lg gap-2 bg-violet-800"
          >
            <img className="w-10" src={instagramIcon} alt="" />
            @henriquedummer05
          </a>
        </li>
        <li>
          <a
            href="https://criarmeulink.com.br/u/1721151179"
            target="_blank"
            className="flex px-4 py-1 rounded-xl justify-center items-center text-slate-200 text-lg gap-2 bg-violet-800"
          >
            <img className="w-10" src={whatsAppIcon} alt="" />
            (51) 99754-9814
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contato;
