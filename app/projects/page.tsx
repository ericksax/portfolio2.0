import { CardProject } from "@/components/cardProjects";
import { Wrapper } from "@/components/wrapper";

const Projects = async () => {
  const result = await fetch("https://pinned.thrzl.xyz/ericksax", {
    next: { revalidate: 10 },
  });
  const data = await result.json();

  return (
    <Wrapper>
      <section className="max-w-4xl mx-auto">
        <header className="border border-b border-gray-800 rounded-lg p-4 w-full m-auto mt-16 ">
          <article className="text-gray-400 text-lg">
            Aqui estão alguns dos meus projetos que tenho desenvolvido. Todos
            eles estão no meu perfil do github, você pode conferir mais detalhes
            clicando sobre eles. 🚀
          </article>
        </header>

        <div className="border border-gray-800 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 m-auto w-[clamp(260px,100%,896px)] mt-24 gap-[clamp(8px,1.5vw,1.5vw)] ">
          {data.map((project: any) => {
            return <CardProject key={project.name} project={project} />;
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
