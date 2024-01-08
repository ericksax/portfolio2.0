import { CardTech } from "@/components/cardTech";
import { Wrapper } from "@/components/wrapper";
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
import {
  SiTypescript,
  SiStyledcomponents,
  SiChakraui,
  SiBootstrap,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiNestjs,
  SiAngular,
  SiPrisma,
  SiSqlite,
  SiPopos,
  SiIonic,
  SiGnubash,
  SiComposer,
} from "react-icons/si";
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
  <SiTypescript size={40} color="#007ACC" />,
  <SiStyledcomponents size={40} color="#DB7093" />,
  <SiChakraui size={40} color="#61DBFB" />,
  <SiBootstrap size={40} color="#7952B3" />,
  <SiNextdotjs size={40} color="#000000" />,
  <SiPostgresql size={40} color="#336791" />,
  <SiMysql size={40} color="#4479A1" />,
  <SiNestjs size={40} color="#E0234E" />,
  <SiAngular size={40} color="#DD0031" />,
  <SiPrisma size={40} color="#2B4562" />,
  <SiSqlite size={40} color="#7E7E7E" />,
  <SiPopos size={40} color="#000000" />,
  <SiIonic size={40} color="#000000" />,
  <SiGnubash size={40} color="#000000" />,
  <SiComposer size={40} color="#000000" />,
];

const Techs = () => {
  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-foreground font-semibold mb-8 mt-16">
          Tecnologias
        </h1>
        <div className="text-foreground text-lg border border-border rounded-lg p-pd1 mt-10">
          <p className="pl-8">
            <span>
              Estas são algumas das tecnologias ou ferramentas que já utilizei.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-wrap justify-between text-foreground text-lg px-0 p-4 mt-8">
          {techList.map((tech) => {
            return <CardTech key={tech.key}>{tech}</CardTech>;
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
