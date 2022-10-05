import "./Text.css";

export default function Text (props: any) {
  const { type, children, size } = props;
  return (
    <article className={`text ${type}`}>
      {children}
    </article>
  );
}
