import { Wrapper } from "@/components/wrapper";

const Courses = () => {
  return (
    <Wrapper>
    <section className="max-w-4xl mx-auto">
      <h1 className="text-headingClamp2 text-foreground font-semibold mb-16 mt-16">
        Cursos
      </h1>

      <ol className="relative border-s border-border dark:border-border">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-border dark:border-border dark:bg-foreground"></div>
          <time className="mb-1 text-sm font-normal leading-none text-foreground dark:text-foreground">
            Dezembro 2023
          </time>
          <h3 className="text-lg font-semibold text-foreground dark:text-foreground">
            Kenzie Academy - FullStack Course
          </h3>
          <p className="mb-4 text-base font-normal text-foreground dark:text-foreground">
            Cursando último módulo do curso full stack da Kenzie Academy Brasil
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-border dark:border-border dark:bg-foreground"></div>
          <time className="mb-1 text-sm font-normal leading-none text-foreground dark:text-foreground">
            Fevereiro 2023
          </time>
          <h3 className="text-lg font-semibold text-foreground dark:text-foreground">
            FullStack - Kenzie Academy Brasil
          </h3>
          <p className="text-base font-normal text-foreground dark:text-foreground">
            Com a necessidade de aprimorar e evoluir os meus conhecimentos
            ingressei no curso da Kenzie Academy. Neste curso é ministrado o
            curso fullStack com as tecnologias Javascript/Typescript e node no
            Backend. além da base fundamental de CSS e HTML
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-border dark:border-border dark:bg-foreground"></div>
          <time className="mb-1 text-sm font-normal leading-none text-foreground dark:text-foreground">
            Abril 2022
          </time>
          <h3 className="text-lg font-semibold text-foreground dark:text-foreground">
            Ignite - RocketSeat
          </h3>
          <p className="text-base font-normal text-foreground dark:text-foreground">
            Concluido a trilha completa de ReactJs. É um curso intenso com
            vários projetos realizados durante o curso. Um projeto para cada
            módulo.
          </p>
        </li>
        <li className="ms-4 mb-10">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-border dark:border-border dark:bg-foreground"></div>
          <time className="mb-1 text-sm font-normal leading-none text-foreground dark:text-foreground">
            Janeiro 2021
          </time>
          <h3 className="text-lg font-semibold text-foreground dark:text-foreground">
            Trilha React - Allura
          </h3>
          <p className="text-base font-normal text-foreground dark:text-foreground">
            Curso sobre ReactJs e Javascript. Curso Angular + Typescript -
            Javscript POO
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-border dark:border-border dark:bg-foreground"></div>
          <time className="mb-1 text-sm font-normal leading-none text-foreground dark:text-foreground">
            Junho 2019
          </time>
          <h3 className="text-lg font-semibold text-foreground dark:text-foreground">
            Guaduação - Universidade Estácio de Sá
          </h3>
          <p className="text-base font-normal text-foreground dark:text-foreground">
            Com a intenção de conhecer a área da tecnologia ingressei no curso
            de Análise e desenvolvimento de sistemas. Vi que era isso mesmo que eu queria.
          </p>
        </li>
      </ol>
    </section>
    </Wrapper>
  );
};

export default Courses;
