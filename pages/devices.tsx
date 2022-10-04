import type { NextPage } from 'next'

import PageLayout from '../components/PageLayout'
import TableOfDevices from '../components/table-device/table-device'

const Divices: NextPage = () => {
  return (
    <div >
      <PageLayout>
      <main >
        <h1 >
          Your Divices
        </h1>

        <h2 >
        A complete list of your devices
        </h2>

        <TableOfDevices/>

      </main>

      </PageLayout>

    

      
    </div>
  )
}

export default Divices
