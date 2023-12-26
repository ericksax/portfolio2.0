import { AnimatedLink } from "@/components/animatedLink";
import { Wrapper } from "./wrapper";

export const Header = () => {
  return (
    <header className="sticky index z-30 top-0 bg-gray-900 w-full border-b border-gray-800 h-16 leading-16">
      <Wrapper>
        <div className="flex max-w-4xl w-full items-center justify-between mx-auto h-full">
          <div className="text-2xl font-light">
            erickfreitas<span className="font-bold text-gray-400">.dev</span>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <AnimatedLink href={"/sobre"}>Sobre</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href={"/projects"}>Projetos</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href={"/contacts"}>Contatos</AnimatedLink>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};
