import { DefaultButton } from "@/components/defaultButton";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import Link from "next/link";
import {
  DownloadIcon,
  GithubIcon,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Contacts = () => {
  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-headingClamp2 text-foreground font-semibold mb-8 mt-16">
          Contatos
        </h1>
        <header className="border border-border rounded-lg p-pd1 mt-8">
          <article className="text-foreground text-articleClamp">
            Aqui você pode encontrar meus contatos, estou disponível meu
            whatsApp para trocarmos ideia, vamos construir juntos!! 🚀
          </article>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto text-xl mt-8 border h-auto rounded-lg p-4 divide-y md:divide-x divide-border md:divide-y-0">
          <div className="flex flex-row items-center sm:flex sm:flex-col justify-evenly sm:items-start gap-4 p-4 justify-ev">
            <Link
              href={"https://www.linkedin.com/in/erickfreitas-dev"}
              target="_blank"
            >
              <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                <Linkedin size={32} />
                http://www.linkedin.com/in/erickfreitas-dev
              </div>
              <Linkedin size={32} className="sm:hidden" />
            </Link>
            <Link href={"https://github.com/ericksax"} target="_blank">
              <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                <GithubIcon size={32} />
                https://github.com/ericksax
              </div>
              <GithubIcon className="sm:hidden" />
            </Link>

            <Link
              href={"https://www.instagram.com/erick_freitas/"}
              target="_blank"
            >
              <div className="hidden sm:flex gap-4 items-center text-foreground text-sm transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                <Instagram size={32} />
                erick_freitas
              </div>
              <Instagram size={32} className="sm:hidden" />
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
              <Button
                variant="outline"
                className="gap-2 transition-all duration-200 ease-in-out hover:scale-105 "
              >
                Fale comigo!! <Send size={16} />
              </Button>
              <DefaultButton>
                Baixar Curriculo
                <DownloadIcon size={16} />
              </DefaultButton>
            </span>
          </aside>
        </section>
      </section>
    </Wrapper>
  );
};

export default Contacts;
