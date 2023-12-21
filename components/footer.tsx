import { SiReact, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex h-12 w-full mt-14 items-center justify-center text-gray-400 text-[12px] bg-gray-900">
      <p>© 2023 Erick de Freitas Silva. Feito com</p>
      <span className="mx-2 flex gap-2 items-center justify-center bg-gray-800 rounded-xl px-2 py-1">
        <SiReact size={12} /> <SiTailwindcss size={12} />
        <SiVisualstudiocode size={12} /> <FaHeart />
      </span>
    </footer>
  );
};
