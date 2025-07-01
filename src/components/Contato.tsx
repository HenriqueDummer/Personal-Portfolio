import contactIcon from "../assets/contact_icon.png";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { AnimateIcon } from "./animate-ui/icons/icon";
import { SendHorizontal } from "./animate-ui/icons/send-horizontal";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const liStyle = "flex items-center gap-4 font-extrathin";

const Contato = () => {
  return (
    <section className="flex justify-center items-center flex-col pb-[10rem] min-h-dvh">
      <h2 className="mt-10 text-4xl font-semibold text-slate-100 font-mono">
        &lt;Contato /&gt;
      </h2>
      <div className="flex p-10 mt-24 w-full bg-secondary-bg rounded-lg min-h-[30rem]">
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <div>
            <h3 className="text-2xl">Vamos conversar</h3>
            <p className="font-light text-secondary-font">
              Sinta-se à vontade para sanar qualquer dúvida. Estou aberto à
              novos projetos!
            </p>
          </div>

          <form
            action="https://formsubmit.co/henriquedummer01@gmail.com"
            method="POST"
            className=""
          >
            <div className="mt-5 flex flex-col gap-4">
              <Input placeholder="Nome" type="nome" name="nome" required />
              <Input placeholder="Email" type="email" name="email" required />
              <Textarea
                className="max-h-[5rem]"
                placeholder="Assunto"
                name="assunto"
                required
              />
            </div>
            <div className="flex w-full justify-end">
              <AnimateIcon animateOnHover>
                <button
                  className="px-4 py-1 border bg-violet-800 mt-4 rounded-lg text-slate-200 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Enviar
                  <SendHorizontal size={22} />
                </button>
              </AnimateIcon>
            </div>
          </form>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <img src={contactIcon} alt="" />
          <ul className="flex flex-col gap-4 mt-4 text-secondary-font">
            <li className="flex items-center gap-4">
              <div className="border border-secondary-font p-2 rounded-full">
                <FaPhoneAlt className="text-xl" />
              </div>
              (51) 99754-9814
            </li>
            <li className="flex items-center gap-4">
              <div className="border border-secondary-font p-2 rounded-full">
                <FaLinkedinIn className="text-xl" />
              </div>
              
              <a
                href="https://www.linkedin.com/in/henrique-dummer-725a1a239/"
                target="_blank"
              >
                linkedin.com/in/henrique-dummer-725a1a239
              </a>
            </li>
             <li className="flex items-center gap-4">
              <div className="border border-secondary-font p-2 rounded-full">
                <FaInstagram className="text-xl" />
              </div>
              
              <a
                href="https://www.instagram.com/henriquedummer05/"
                target="_blank"
              >
                instagram.com/henriquedummer05
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Contato;
