import { Wrapper } from "@/components/wrapper";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaGit,
  FaSass,
  FaNpm,
  FaPhp,
  FaPython,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

const Techs = () => {
  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-foreground font-semibold mb-8 mt-16">
          Sobre as tecnologias
        </h1>
        <div className="text-foreground text-lg border border-border rounded-lg p-pd1 mt-10">
          <p className="ident-8 text-balance text-justify">
            <span className="pl-8">
              "Acredito que não há uma linguagem de programação melhor do que
              outra. Não se trata de{" "}
            </span>
            superioridade, mas sim de encontrar a ferramenta certa para o
            trabalho certo. Linguagens diferentes podem alcançar o mesmo
            objetivo de maneiras diversas. Para mim, é sobre processos e
            pessoas, buscando facilidade, simplicidade e soluções práticas. Vejo
            as linguagens de programação como uma caixa de ferramentas, onde
            escolhemos a ferramenta certa para a tarefa específica. Não é o fim
            em si, mas o meio para alcançar nossos objetivos como
            desenvolvedores."
          </p>
        </div>
        <div className=" flex gap-8 flex-wrap justify-center text-foreground text-lg border border-border rounded-lg p-4 mt-8">
          <FaReact size={32} color="#61DBFB" />
          <FaNode size={32} color="#83CD29" />
          <FaHtml5 size={32} color="#E34C26" />
          <FaCss3 size={32} color="#264DE4" />
          <FaJs size={32} color="#F0DB4F" />
          <FaGithub size={32} color="#24292E" />
          <FaGit size={32} color="#F05032" />
          <FaSass size={32} color="#CC6699" />
          <FaNpm size={32} color="#CB3837" />
          <FaPhp size={32} color="#777BB4" />
          <FaPython size={32} color="#3776AB" />
          <FaDocker size={32} color="#2496ED" />
          <FaLinux size={32} color="#FCC624" />
        </div>
      </section>
    </Wrapper>
  );
};

export default Techs;
