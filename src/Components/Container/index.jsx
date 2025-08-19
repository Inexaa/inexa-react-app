const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto ${className}`}>
      <div className="px-2 md:px-4 lg:px-8">{children}</div>
    </div>
  );
};

export default Container;
