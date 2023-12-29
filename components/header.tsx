
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import RightMenu from "./rightMenu";
import { Wrapper } from "./wrapper";
import Image from "next/image";

export const Header = () => {

  return (
    <header className="sticky index z-30 top-0 w-full bg-gray-900 border-b border-border h-16 leading-16">
      <Wrapper>
        <div className="flex max-w-4xl w-full items-center gap-16 justify-between mx-auto h-full">
          <div className="flex items-center gap-8">
            <Link className="hidden xs:block" href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
              />
            </Link>
            <RightMenu />
          </div>
          <ModeToggle />
        </div>
      </Wrapper>
    </header>
  );
};
