import { GithubIcon, Instagram, Linkedin, Send } from "lucide-react";

const Sobre = () => {
  return (
    <section className="max-w-4xl mx-auto text-xl mt-[72px] text-justify ">
      <h1 className="text-3xl text-foreground font-semibold mb-8">
        Sobre mim<span className="float-right text-[22px]"> 👨‍⚕️ -{">"} 👨‍💻 </span>{" "}
      </h1>

      <div className="mt-16 text-foreground text-md space-y-4">
        <p className="ident-8 text-balance">
          <span className="pl-8">
            Sempre estou ligado nas novidades em tecnologia, é o que me motiva!
            Antes da prazer{" "}
          </span>
          de me jogar nesse universo, eu era farmacêutico e passei mais de 10
          anos no varejo. Agradeço muito por tudo que aprendi nessa jornada, mas
          o que me faz vibrar mesmo é a tecnologia, desenvolver sites, apps, e
          tudo mais nesse mundo.
        </p>
        <p>
          <span className="pl-8  text-justify">
            Minha história profissional foi na saúde: formei-me em Farmácia e
            trabalhei anos
          </span>{" "}
          nesse campo. Foi uma experiência incrível! Ainda assim, algo dentro de
          mim buscava mais, e quando mergulhei na tecnologia, encontrei minha
          verdadeira paixão.
        </p>
        <p>
          <span className="pl-8">
            Mudar de uma carreira farmacêutica para a tecnologia pode parecer
            radical, mas para mim,
          </span>
          foi fluído. É fascinante ver como a tecnologia transforma a maneira
          como as pessoas se informam, cuidam da saúde e interagem com o mundo.
          Cada linha de código que escrevo me conecta a algo maior, contribuindo
          para um futuro digital mais inovador e inclusivo. Estou comprometido
          em aprender sempre mais, absorver novas tecnologias, aprimorar minhas
          habilidades de programação e aplicá-las em projetos significativos.
          Essa jornada de aprendizado constante é o que me inspira todos os
          dias, me impulsiona a seguir em frente e abraçar todas as
          oportunidades que a tecnologia oferece.
        </p>
      </div>
    </section>
  );
};
export default Sobre;
