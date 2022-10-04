import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function PageLayout({
  children
}: any) {
    /* Cual es el typo para un children? */
  return (
    <div >
      <Head>
        <title>My Zoleo App</title>
        <meta
          name="My Zoleo App"
          content="The application to My Zoleo App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
