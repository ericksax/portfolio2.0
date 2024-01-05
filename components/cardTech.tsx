interface CardTechProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardTech = ({ children, ...props }: CardTechProps) => {
  return (
    <div {...props} className="bg-gradient-to-l from-card to-accent flex items-center justify-center border border-border rounded-lg px-16 py-4 transition-all duration-300 ease-in-out hover:scale-105">
      {children}
    </div>
  );
};
