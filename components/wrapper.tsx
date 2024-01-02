interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="p-pd1 w-full h-full">{children}</div>;
};

export { Wrapper };
