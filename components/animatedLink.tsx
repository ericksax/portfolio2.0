import Link from "next/link";

type AnimetedtLinkProps = {
  href: string;
  children: React.ReactNode;
};

const AnimatedLink = ({ href, children }: AnimetedtLinkProps) => {
  return (
    <Link href={href} className="relative inline-block group">
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gray-50 transition-all duration-200 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export { AnimatedLink };
