import { CardProject } from "@/components/cardProjects";

const Projects = async () => {
  const result = await fetch("https://pinned.thrzl.xyz/ericksax", {
    next: { revalidate: 10 },
  });
  const data = await result.json();

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-2xl mt-24">Projetos</h1>
      <div className="mt-8 max-w-4xl h-auto">
        <div className="flex flex-wrap p-4 overflow-hidden gap-4 items-center justify-between">
          {data.map((project: any) => {
            return <CardProject key={project.name} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
