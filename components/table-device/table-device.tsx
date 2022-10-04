import devices from "../../devices.json";
import CardDivice from "../card-device/Card-device";
import Divice from "../../interfaces/card-device-interface";

export default function TableOfDevices() {
  const devicesMock = devices.devices;

  return (
    <>
      <h3>You have {devicesMock.length} active</h3>
      <div className="table-device">
        <CardDivice devicesMock={devicesMock} />
      </div>
    </>
  );
}
