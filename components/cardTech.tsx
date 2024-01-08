interface CardTechProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardTech = ({ children, ...props }: CardTechProps) => {
  return (
    <div {...props} className="bg-gradient-to-l from-card to-accent flex flex-col items-center justify-center gap-2 text-xs border border-border rounded-lg px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105">
      {children}
    </div>
  );
};
