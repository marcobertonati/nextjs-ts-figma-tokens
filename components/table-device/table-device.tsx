import devices from '../../devices.json'
import CardDivice from '../card-device/Card-device'
import Divice from '../../interfaces/card-device-interface'



export default function TableOfDevices () {

    const devicesMock = devices.devices

    return(
        <div >

            <CardDivice devicesMock={devicesMock}/>
        </div>
    )
}