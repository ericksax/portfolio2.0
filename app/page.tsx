import { DefaultButton } from "@/components/defaultButton";
import { Wrapper } from "@/components/wrapper";
import {
  DownloadIcon,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si"
export default function Home() {
  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto  mt-4">
        <h1 className=" text-headingClamp font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-blue-900">
          Olá, eu sou Erick... <br /> Fullstack Developer!
        </h1>
        <article className="space-x-4 mt-8 ident-8 text-foreground text-articleClamp">
          Sou um apaixonado desenvolvedor web comprometido em criar experiências
          online agradáveis. Minha missão é transformar ideias em realidade,
          utilizando as mais recentes tecnologias e melhores práticas de
          desenvolvimento. Estou aqui para impulsionar seu projeto para o
          próximo nível. Vamos criar algo incrível juntos!
        </article>
      </section>

      <div className="flex max-w-4xl mx-auto mt-8">
        <strong className="px-3 py-1 rounded-full bg-accent text-socialHeading">
          Midias sociais e contato ☎
        </strong>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto text-xl mt-8 border h-auto rounded-lg p-2 divide-y md:divide-x divide-border md:divide-y-0">
        <div className="flex flex-row sm:flex sm:flex-col justify-evenly gap-4 p-pd1 justify-ev">
          <Link
            href={"https://www.linkedin.com/in/erickfreitas-dev"}
            target="_blank"
          >
            <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <SiLinkedin size={32} />
              http://www.linkedin.com/in/erickfreitas-dev
            </div>
            <SiLinkedin size={32} className="sm:hidden" />
          </Link>
          <Link href={"https://github.com/ericksax"} target="_blank">
            <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <SiGithub size={32} />
              https://github.com/ericksax
            </div>
            <SiGithub size={32} className="sm:hidden" />
          </Link>

          <Link
            href={"https://www.instagram.com/erick_freitas/"}
            target="_blank"
          >
            <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
              <SiInstagram size={32} />
              erick_freitas
            </div>
            <SiInstagram size={32} className="sm:hidden" />
          </Link>
        </div>
        <aside className="flex flex-col h-full align-center items-center p-pd1 text-sm">
          <article className="flex justify-center  text-sm">
            Para informações adicionais, oportunidades de trabalho ou
            simplesmente para network na área de desenvolvimento web, os links
            das minhas redes sociais estão ao lado. Ficarei contente em trocar
            ideias e expandir nossa rede profissional.
          </article>
          <span className="flex items-center justify-evenly w-full mt-4 flex-wrap gap-8">
            <Link
              target="_blank"
              href={" https://wa.me/5532999902406"}
              className="border border-primary/50 flex px-4 py-2 items-center rounded gap-2 transition-all duration-200 ease-in-out hover:scale-105 "
            >
              Fale comigo!! <SiWhatsapp size={16} />
            </Link>
            <DefaultButton>
              Baixar Currículo
              <DownloadIcon size={16} />
            </DefaultButton>
          </span>
        </aside>
      </section>
    </Wrapper>
  );
}
