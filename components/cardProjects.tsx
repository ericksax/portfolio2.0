import Link from "next/link";
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
  image: string;
  link: string;
};

const CardProject = ({ project, image, link }: ProjectProps) => {
  return (
    <div className="bg-gradient-to-r from-accent to-card flex w-full h-full justify-center items-center border border-border hover:border-primary/20 rounded">
      <div className="p-pd1 flex flex-col items-center justify-center gap-4 w-[clamp(200px,20vw,400px)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
        <strong>{project.name}</strong>
        <Image src={image} width={400} height={400} alt={""} />
        <aside className="flex justify-around items-center gap-4 w-full">
          <Link
            href={project.link}
            target="_blank"
            className="text-xs border border-border rounded-md px-4 py-1 bg-gray-300 text-gray-900 hover:bg-gray-800 hover:text-gray-100"
          >
            github
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" text-xs bg-gray-800 text-gray-300 border border-border px-4 py-1 rounded-md hover:bg-gray-300 hover:text-gray-800"
          >
            Deploy
          </Link>
        </aside>
      </div>
    </div>
  );
};

export { CardProject };
