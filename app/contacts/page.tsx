import { GithubIcon, Instagram, Linkedin } from "lucide-react";

const Contacts = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl text-foreground font-semibold mb-8 mt-16">
        Contatos
      </h1>
      <header className="border border-border rounded-lg p-4 mt-8">
        <article className="text-foreground text-lg">
          Aqui você pode encontrar meus contatos, estou disponível meu whatsApp
          para trocarmos ideia, vamos construir juntos!! 🚀
        </article>
      </header>
      <section className="grid grid-cols-2 max-w-4xl mx-auto text-xl mt-16 border border-border h-auto rounded-lg p-4 divide-x divide-gray-800 ">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-4 items-center text-foreground text-sm">
            <Instagram size={32} />
            Erick_freitas
          </div>
          <div className="flex gap-4 items-center text-foreground text-sm">
            <GithubIcon size={32} />
            https://github.com/ericksax
          </div>
          <div className="flex gap-4 items-center text-foreground text-sm">
            <Linkedin size={32} />
            http://www.linkedin.com/in/erickfreitas-dev
          </div>
        </div>
        <aside>
          <article className="flex h-full justify-center items-center p-4 text-foreground text-sm">
            Você pode me encontrar pelos links das redes sociais ao lado, também
            estou disponível no meu whatsApp para trocarmos ideia, vamos
            construir juntos!!
          </article>
        </aside>
      </section>
    </section>
  );
};

export default Contacts;
