import "./Heading.css";

export default function Heading(props: any) {
  const { type, children } = props;

  if (type == "h1")
    return (
      <h1 className={`heading type-${type}`}>
        {children}
      </h1>
    );
  if (type == "h2") return <h2 className={`heading type-${type}`}>{children}</h2>;
  if (type == "h3") return <h3 className={`heading type-${type}`}>{children}</h3>;

  return <h3 className={`heading ${type}`}>{children}</h3>;
}
