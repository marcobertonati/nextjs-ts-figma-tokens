import type { NextPage } from "next";
import Header from "../components/header/Header";

import PageLayout from "../components/PageLayout";

const Home: NextPage = () => {
  return (
    <div>
      <PageLayout>
        <Header />

        <section>
          <h1>My Zoleo App ♥</h1>

          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            adipisci, quaerat eius expedita sunt maxime quia temporibus et quis
            eaque perspiciatis animi doloribus exercitationem, reiciendis minima
            est quibusdam perferendis amet.
          </p>
        </section>
      </PageLayout>
    </div>
  );
};

export default Home;
