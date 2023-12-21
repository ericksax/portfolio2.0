import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
type ProjectProps = {
  project: {
    name: string;
    language_color: string;
    language: string;
    description: string;
    stars: string;
    full_name: string;
    image: string;
    link: string;
  };
};

const CardProject = ({ project }: ProjectProps) => {
  return (
    <Link href={project.link}>
      <div className="border mt-8 p-4 border-gray-800 rounded-lg flex flex-col items-center justify-center gap-4 max-w-[260px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
        <strong>{project.name}</strong>
        <Image src={"/foto.png"} width={180} height={180} alt={""} />
        <article className="text-gray-400 text-[12px]">
          {project.description}
        </article>
        <aside className="flex gap-2 w-full">
          <Badge variant={"secondary"} color="red">
            {project.language}
          </Badge>
        </aside>
      </div>
    </Link>
  );
};

export { CardProject };
