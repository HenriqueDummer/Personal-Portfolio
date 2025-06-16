import React from "react";
import gmailIcon from "../assets/gmail.png";
import instagramIcon from "../assets/instagram.png";
import whatsAppIcon from "../assets/whatsapp.png";
import TextareaAutosize from "react-textarea-autosize";
import { MdSend } from "react-icons/md";

const Contato = () => {
  return (
    <section className="bg-zinc-900 flex justify-center items-center flex-col pb-[10rem]">
      <h2 className="text-4xl font-semibold text-slate-200">
        Entre em contato
      </h2>
      <p className="text-slate-300 text-lg mt-2">
        Sinta-se à vontade para sanar qualquer dúvida. Estou aberto à novos
        projetos!
      </p>
      <form
        action="https://formsubmit.co/henriquedummer01@gmail.com"
        method="POST"
        className="flex flex-col gap-4 mt-16 w-[50%]"
      >
        <div className="flex gap-4 w-full">
          <p className="flex flex-col w-full">
            <label htmlFor="nome" className="text-slate-300">
              Nome
            </label>
            <input
              className="h-10 mt-2 rounded-lg pl-4 bg-transparent border border-slate-200 text-slate-300"
              type="nome"
              name="nome"
              required
            />
          </p>
          <p className="flex flex-col w-full ">
            <label htmlFor="email" className="text-slate-300">
              Seu email
            </label>
            <input
              className="h-10 mt-2 rounded-lg pl-4 bg-transparent border border-slate-200 text-slate-300"
              type="email"
              name="email"
              required
            />
          </p>
        </div>

        <p>
          <label htmlFor="email" className="text-slate-300">
            Assunto
          </label>
          <TextareaAutosize
            minRows={8}
            className="w-full resize-none bg-transparent rounded-lg border border-slate-200 text-slate-300 p-2"
            name="name"
            required
          />
        </p>

        <div className="flex w-full justify-end">
          <button
            className="w-36 bg-violet-800 rounded-lg text-slate-200 text-lg font-semibold h-10 flex items-center justify-center gap-2"
            type="submit"
          >
            Enviar
            <MdSend />
          </button>
        </div>
      </form>
     
    </section>
  );
};

export default Contato;
