import { CardTech } from "@/components/cardTech";
import { Wrapper } from "@/components/wrapper";
import { Key } from "lucide-react";
import React from "react";
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

const techList = [
  <FaReact size={40} color="#61DBFB" />,
  <FaNode size={40} color="#83CD29" />,
  <FaHtml5 size={40} color="#E34C26" />,
  <FaCss3 size={40} color="#264DE4" />,
  <FaJs size={40} color="#F0DB4F" />,
  <FaGithub size={40} color="#24292E" />,
  <FaGit size={40} color="#F05040" />,
  <FaSass size={40} color="#CC6699" />,
  <FaNpm size={40} color="#CB3837" />,
  <FaPhp size={40} color="#777BB4" />,
  <FaPython size={40} color="#3776AB" />,
  <FaDocker size={40} color="#2496ED" />,
  <FaLinux size={40} color="#FCC624" />,
];

const Techs = () => {
  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-foreground font-semibold mb-8 mt-16">
          Sobre as tecnologias
        </h1>
        <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-wrap justify-between text-foreground text-lg px-0 p-4 mt-8">
          {techList.map((tech) => {
            return <CardTech key={techList}>{tech}</CardTech>;
          })}
        </div>
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
      </section>
    </Wrapper>
  );
};

export default Techs;
