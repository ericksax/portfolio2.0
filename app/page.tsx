import { GithubIcon, Instagram, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-4xl mx-auto text-xl mt-[72px]">
        <h1 className="text-5xl font-semibold ">
          👋 Oi, eu sou Erick... É uma honra te-lo aqui!!! 😊
        </h1>
        <article className="space-x-4 mt-16 ident-8 text-foreground text-md">
          Sou um apaixonado desenvolvedor web comprometido em criar experiências
          online agradáveis. Minha missão é transformar ideias em realidade,
          utilizando as mais recentes tecnologias e melhores práticas de
          desenvolvimento. Estou aqui para impulsionar seu projeto para o
          próximo nível. Vamos criar algo incrível juntos!
        </article>
      </section>

      <div className="max-w-4xl mx-auto text-xl mt-16 ">
        <strong className="px-4 py-2 rounded-full bg-accent">
          Midias sociais e contato 💌 ☎{" "}
        </strong>
      </div>

      <section className="grid grid-cols-2 max-w-4xl mx-auto text-xl mt-8 border  h-auto rounded-lg p-4 divide-x divide-gray-800 ">
        <div className="flex flex-col justify-evenly gap-4 p-4 justify-ev">
          <Link
            href={"https://www.linkedin.com/in/erickfreitas-dev"}
            target="_blank"
          >
            <div className="flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <Linkedin size={32} />
              http://www.linkedin.com/in/erickfreitas-dev
            </div>
          </Link>
          <Link href={"https://github.com/ericksax"} target="_blank">
            <div className="flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <GithubIcon size={32} />
              https://github.com/ericksax
            </div>
          </Link>

          <Link
            href={"https://www.instagram.com/erick_freitas/"}
            target="_blank"
          >
            <div className="flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <Instagram size={32} />
              erick_freitas
            </div>
          </Link>
        </div>
        <aside className="flex flex-col h-full align-center items-center p-4 text-gray-400 text-sm">
          <article className="flex justify-center text-gray-400 text-sm">
            Para informações adicionais, oportunidades de trabalho ou
            simplesmente para network na área de desenvolvimento web, os links
            das minhas redes sociais estão ao lado. Ficarei contente em trocar
            ideias e expandir nossa rede profissional.
          </article>
          <button className="flex justify-center items-center gap-2 mt-4 bg-gray-200 px-4 py-2 rounded-lg text-gray-800 text-sm font-semibold trnsition-all duration-200 ease-in-out hover:scale-105">
            Fala comigo!! <Send size={16} />
          </button>
        </aside>
      </section>
    </>
  );
}
