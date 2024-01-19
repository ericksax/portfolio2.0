'use client'
import { ReactNode, RefAttributes } from "react";
import Link, {LinkProps} from "next/link";
import { useTheme } from "next-themes";


type DefaultButtonProps = {
  children: ReactNode
}
export const DefaultButton = ({ children}: DefaultButtonProps) => {
  const { theme } = useTheme();
  return (
    <Link
      data-theme={theme}
      target="_blank"
      href={
        "https://acrobat.adobe.com/id/urn:aaid:sc:US:b30221b5-7f8c-4220-9c51-f0247a888052"
      }
      className={`flex gap-2 items-center border rounded-md transition-all duration-200 ease-in-out px-4 py-[8.5px] font-medium bg-gray-300 text-gray-900 hover:bg-gray-400 border-gray-600 data-[theme=light]:bg-gray-100 data-[theme=light]:text-gray-900 data-[theme=light]:border-gray-800 data-[theme=light]:hover:bg-gray-800 data-[theme=light]:hover:text-gray-100`}
    >
      {children}
    </Link>
  );
};
