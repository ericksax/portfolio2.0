import { DefaultButton } from "@/components/defaultButton";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import { DownloadIcon, GithubIcon, Instagram, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto  mt-[72px]">
        <h1 className=" text-headingClamp font-semibold ">
          👋 Oi, eu sou Erick... Fullstack Developer! 😊
        </h1>
        <article className="space-x-4 mt-8 ident-8 text-foreground text-md">
          Sou um apaixonado desenvolvedor web comprometido em criar experiências
          online agradáveis. Minha missão é transformar ideias em realidade,
          utilizando as mais recentes tecnologias e melhores práticas de
          desenvolvimento. Estou aqui para impulsionar seu projeto para o
          próximo nível. Vamos criar algo incrível juntos!
        </article>
      </section>

      <div className="max-w-4xl mx-auto mt-8 ">
        <strong className="px-4 py-2 rounded-full bg-accent text-[12px]">
          Midias sociais e contato 💌 ☎{" "}
        </strong>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto text-xl mt-8 border h-auto rounded-lg p-4 divide-y md:divide-x divide-border md:divide-y-0">
        <div className="flex flex-row sm:flex sm:flex-col justify-evenly gap-4 p-4 justify-ev">
          <Link
            href={"https://www.linkedin.com/in/erickfreitas-dev"}
            target="_blank"
          >
            <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <Linkedin size={32} />
              http://www.linkedin.com/in/erickfreitas-dev
            </div>
            <Linkedin size={32} className="sm:hidden"/>
          </Link>
          <Link href={"https://github.com/ericksax"} target="_blank">
            <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <GithubIcon size={32} />
              https://github.com/ericksax
            </div>
            <GithubIcon className="sm:hidden"/>
          </Link>

          <Link
            href={"https://www.instagram.com/erick_freitas/"}
            target="_blank"
          >
            <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <Instagram size={32} />
              erick_freitas
            </div>
            <Instagram size={32} className="sm:hidden"/>
          </Link>
        </div>
        <aside className="flex flex-col h-full align-center items-center p-4 text-sm">
          <article className="flex justify-center  text-sm">
            Para informações adicionais, oportunidades de trabalho ou
            simplesmente para network na área de desenvolvimento web, os links
            das minhas redes sociais estão ao lado. Ficarei contente em trocar
            ideias e expandir nossa rede profissional.
          </article>
          <span className="flex items-center justify-evenly w-full mt-4 flex-wrap gap-8">
            <Button variant="outline" className="gap-2 transition-all duration-200 ease-in-out hover:scale-105 ">
              Fale comigo!! <Send size={16} />
            </Button>
            <DefaultButton >
              Baixar Curriculo
              <DownloadIcon size={16} />
            </DefaultButton>
          </span>
        </aside>
      </section>
    </Wrapper>
  );
}
