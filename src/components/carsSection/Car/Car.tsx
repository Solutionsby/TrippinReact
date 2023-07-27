import "./car.scss";

export const Car = ({
  id,
  marka,
  model,
  enginePower,
  engineCapacity,
}: {
  id: number;
  marka: string;
  model: string;
  enginePower: number;
  engineCapacity: number;
}) => {
  const carCapacityDecoder = () => {
    if (engineCapacity === 3724) {
      return 350;
    } else {
      const raundCapacity = Math.round(engineCapacity / 1000) * 100;
      return raundCapacity;
    }
  };
  const carSeats = model != "SL" ? 4 : 2;
  const carModel = `${marka} ${model} ${carCapacityDecoder()} `;
  console.log(carModel);
  console.log(carSeats);
  return <div className="car-wrapper"></div>;
};
