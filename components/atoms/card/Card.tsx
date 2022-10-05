import "./Card.css";

export default function Card (props: any) {
  const { type, children } = props;
  return (
    <article className={`card ${type}`}>
      {children}
    </article>
  );
}
