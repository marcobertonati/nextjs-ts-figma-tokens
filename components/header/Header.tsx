import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="img-header">
        <Image
          src={`/img/header-zoleo.jpg`}
          alt={`Header of the home page's My Zoleo`}
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
        />
      </div>
    </header>
  );
}
