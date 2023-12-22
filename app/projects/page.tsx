import { CardProject } from "@/components/cardProjects";

const Projects = async () => {
  const result = await fetch("https://pinned.thrzl.xyz/ericksax", {
    next: { revalidate: 10 },
  });
  const data = await result.json();

  return (
    <section className="max-w-4xl mx-auto">
      <header className="border border-b border-gray-800 rounded-lg p-4 w-full m-auto mt-16 ">
        <article className="text-gray-400 text-lg">
          Aqui estão alguns dos meus projetos que tenho desenvolvido. Todos eles
          estão no meu perfil do github, você pode conferir mais detalhes
          clicando sobre eles. 🚀
        </article>
      </header>
      <div className="mt-8 max-w-4xl h-auto">
        <div className="border border-gray-800 rounded-lg flex flex-wrap p-4 overflow-hidden gap-4 items-center justify-evenly">
          {data.map((project: any) => {
            return <CardProject key={project.name} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
