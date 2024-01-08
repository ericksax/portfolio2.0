"use client";
import { ReactNode } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const DefaultButton = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const stylesByTheme = () => {
    if (theme === "light") {
      return "bg-gray-100 text-gray-900 border-gray-800 hover:bg-gray-800 hover:text-gray-100";
    } else if (theme === "dark" || theme === "system") {
      return "bg-gray-300 text-gray-900 hover:bg-gray-400 border-gray-600";
    }
  };

  return (
    <Link
      target="_blank"
      href={
        "https://acrobat.adobe.com/id/urn:aaid:sc:US:b30221b5-7f8c-4220-9c51-f0247a888052"
      }
      className={`flex gap-2 items-center border rounded-md transition-all duration-200 ease-in-out px-4 py-[8.5px] font-medium + ${stylesByTheme()}`}
    >
      {children}
    </Link>
  );
};
