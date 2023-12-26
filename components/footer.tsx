import { SiReact, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex h-12 w-full bg-background mt-14 items-center justify-center text-[12px]">
      <p>© 2023 Erick de Freitas Silva. Feito com</p>
      <span className="mx-2 flex gap-2 items-center justify-center rounded-xl px-2 py-1 bg-accent">
        <SiReact size={12} /> <SiTailwindcss size={12} />
        <SiVisualstudiocode size={12} /> <FaHeart />
      </span>
    </footer>
  );
};
