import "./Button.css";

export default function Button(props: any) {
  const { type, children } = props;
  return (
    <button className={`button ${type ? type : "type-primary"}`}>
      {children}
    </button>
  );
}
