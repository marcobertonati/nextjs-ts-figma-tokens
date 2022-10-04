import type { NextPage } from "next";

import PageLayout from "../components/PageLayout";
import TableOfDevices from "../components/table-device/table-device";

const Divices: NextPage = () => {
  return (
      <PageLayout>
        <section>
          <h1>Your Divices</h1>

          <h2>A complete list of your devices</h2>

          <TableOfDevices />
        </section>
      </PageLayout>
  );
};

export default Divices;
