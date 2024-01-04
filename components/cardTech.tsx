export const CardTech = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center border border-border rounded-lg px-16 py-4 transition-all duration-300 ease-in-out hover:scale-105">
      {children}
    </div>
  );
};
