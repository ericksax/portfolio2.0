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
  {
    symbol: <FaReact size={40} color="#61DBFB" />,
    key: "1",
  },
  {
    symbol: <FaNode size={40} color="#83CD29" />,
    key: "2",
  },
  {
    symbol: <FaHtml5 size={40} color="#E34C26" />,
    key: "3",
  },
  {
    symbol: <FaCss3 size={40} color="#264DE4" />,
    key: "4",
  },
  {
    symbol: <FaJs size={40} color="#F0DB4F" />,
    key: "5",
  },

  {
    symbol: <FaGithub size={40} color="#24292E" />,
    key: "6",
  },
  {
    symbol: <FaGit size={40} color="#F05040" />,
    key: "7",
  },
  {
    symbol: <FaSass size={40} color="#CC6699" />,
    key: "8",
  },
  {
    symbol: <FaNpm size={40} color="#CB3837" />,
    key: "9",
  },
  {
    symbol: <FaPhp size={40} color="#777BB4" />,
    key: "10",
  },
  {
    symbol: <FaPython size={40} color="#3776AB" />,
    key: "11",
  },
  {
    symbol: <FaDocker size={40} color="#2496ED" />,
    key: "12",
  },
  {
    symbol: <FaLinux size={40} color="#FCC624" />,
    key: "13",
  },
  {
    symbol: <SiTypescript size={40} color="#007ACC" />,
    key: "14",
  },
  {
    symbol: <SiStyledcomponents size={40} color="#DB7093" />,
    key: "15",
  },
  {
    symbol: <SiChakraui size={40} color="#61DBFB" />,
    key: "16",
  },
  {
    symbol: <SiBootstrap size={40} color="#7952B3" />,
    key: "17",
  },
  {
    symbol: <SiNextdotjs size={40} color="#000000" />,
    key: "18",
  },
  {
    symbol: <SiPostgresql size={40} color="#336791" />,
    key: "19",
  },
  {
    symbol: <SiMysql size={40} color="#4479A1" />,
    key: "20",
  },
  {
    symbol: <SiNestjs size={40} color="#E0234E" />,
    key: "21",
  },
  {
    symbol: <SiAngular size={40} color="#DD0031" />,
    key: "22",
  },
  {
    symbol: <SiPrisma size={40} color="#2B4562" />,
    key: "23",
  },
  {
    symbol: <SiSqlite size={40} color="#7E7E7E" />,
    key: "24",
  },
  {
    symbol: <SiPopos size={40} color="#000000" />,
    key: "25",
  },

  {
    symbol: <SiIonic size={40} color="#000000" />,
    key: "26",
  },

  {
    symbol: <SiGnubash size={40} color="#000000" />,
    key: "27",
  },
  {
    symbol: <SiComposer size={40} color="#000000" />,
    key: "28",
  },
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
            return <CardTech key={tech.key}>{tech.symbol}</CardTech>;
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
