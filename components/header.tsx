"use client";

import { AnimatedLink } from "@/components/animatedLink";
import { Wrapper } from "./wrapper";
import RightMenu from "./rightMenu";
import Image from "next/image";

import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="sticky index z-30 top-0 w-full bg-background border-b border-border h-16 leading-16">
      <Wrapper>
        <div className="flex max-w-4xl w-full items-center gap-16 justify-between mx-auto h-full">
          <div className="flex items-center gap-8">
            <Link href={"/"}>
              {theme === "light" ? (
                <Image
                  src={"/logo-white.png"}
                  width={50}
                  height={50}
                  alt={""}
                />
              ) : (
                <Image src={"/logo.png"} width={48} height={48} alt={""} />
              )}
            </Link>

            <RightMenu />
          </div>

          {/* <div className="text-2xl font-light">
            erickfreitas<span className="font-bold text-gray-400">.dev</span>
          </div> */}
          {/* <nav>
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
          </nav> */}
          <ModeToggle />
        </div>
      </Wrapper>
    </header>
  );
};
