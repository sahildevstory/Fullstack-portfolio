
type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-[var(--container-max)] mx-auto px-4 md:px-8 lg:px-12">{children}</div>
  )
}

export default Container