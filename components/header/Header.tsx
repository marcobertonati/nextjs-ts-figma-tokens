import Image from "next/image";

export default function Header() {
  return (
    <header>
      {/* <div className="img-header"> */}
      <Image
        src={`/img/header-zoleo.jpg`}
        alt={`Header of the home page's My Zoleo`}
        width={1000}
        height={300}
        objectFit="cover"
      />
      {/* </div> */}
    </header>
  );
}
