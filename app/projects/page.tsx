import { CardProject } from "@/components/cardProjects";
import { Wrapper } from "@/components/wrapper";

const Projects = async () => {
  const result = await fetch("https://pinned.thrzl.xyz/ericksax", {
    next: { revalidate: 10 },
  });

  const data = await result.json();

  const imageList = [
    {
      image: "/todoList.png",
      link: "https://todo-list-m3erick.vercel.app/",
    },
    {
      image: "/coffeeDelivery.png",
      link: "https://coffee-delivery.vercel.app/",
    },
    {
      image: "/foto.png",
      link: "https://estimativo-ativa-j6mm.vercel.app",
    },
    {
      image: "/totext.png",
      link: "https://totext-nine.vercel.app",
    },
  ];

  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-headingClamp2 text-foreground font-semibold mb-8 mt-8">
          Projetos
        </h1>
        <header className="border border-b border-border rounded-lg p-pd1 w-full m-auto mt-8 ">
          <article className="text-foreground text-articleClamp">
            Aqui estão alguns dos meus projetos que tenho desenvolvido. Todos
            eles estão no meu perfil do github, você pode conferir mais detalhes
            clicando sobre eles. 🚀
          </article>
        </header>

        <div className="rounded-lg grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 m-auto w-[clamp(200px,100%,896px)] mt-8 gap-[clamp(1rem,1.5vw,1.8rem)] ">
          {data.map((project: any, index: number) => {
            return (
              <CardProject
                key={project.name}
                project={project}
                image={imageList[index].image}
                link={imageList[index].link}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projects;

{
  /* <section className="bg-slate-100 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 m-auto w-[clamp(400px,75%,980px)] mt-24 gap-[clamp(8px,1.5vw,1.5vw)] p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="text-center leading-[16] container bg-emerald-300 h-64 min-w-56 border border-black"
        >
          Card
        </div>
      ))}
    </section> */
}
