import { GithubIcon, Instagram, Linkedin } from "lucide-react";

const Contacts = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-2xl mt-24">Contatos</h1>
      <section className="grid grid-cols-2 max-w-4xl mx-auto text-xl mt-16 border border-gray-800 h-auto rounded-lg p-4 divide-x divide-gray-800 ">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-4 items-center text-gray-300 text-sm">
            <Instagram size={32} />
            Erick_freitas
          </div>
          <div className="flex gap-4 items-center text-gray-300 text-sm">
            <GithubIcon size={32} />
            https://github.com/ericksax
          </div>
          <div className="flex gap-4 items-center text-gray-300 text-sm">
            <Linkedin size={32} />
            http://www.linkedin.com/in/erickfreitas-dev
          </div>
        </div>
        <aside>
          <article className="flex h-full justify-center items-center p-4 text-gray-400 text-sm">
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
