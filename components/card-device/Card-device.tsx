import Divice from "../../interfaces/card-device-interface";

export default function CardDivice({ devicesMock }: Divice[]) {
  return (
    <>
      {devicesMock.map((device: Divice) => {
        return (
          <div className="single-card" key={device.id}>
            <h6>{device.name}</h6>
            <p>{device.description}</p>
            <p>{device.price}</p>
          </div>
        );
      })}
    </>
  );
}
