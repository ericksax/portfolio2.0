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
};

const CardProject = ({ project }: ProjectProps) => {
  return (
    <Link href={project.link}>
      <div className="mt-8 p-4 flex flex-col items-center justify-center gap-4 w-[clamp(200px,20vw,400px)] min-h-[284px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
        <Image src={"/foto.png"} width={400} height={400} alt={""} />
        <strong>{project.name}</strong>
        <aside className="flex gap-2 w-full"></aside>
      </div>
    </Link>
  );
};

export { CardProject };
