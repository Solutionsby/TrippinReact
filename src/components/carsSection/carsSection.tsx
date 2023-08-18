import { Car } from "./Car/Car";
import car from "../../db/data.json";
import "./carsSection.scss";

export const CarsSection = () => {
  return (
    <div className="cars-section-wrapper" id="carSection">
      <div className="car">
        {car.cars.map(
          ({
            id,
            marka,
            model,
            enginePower,
            engineCapacity,
            acceleration,
          }: {
            id: number;
            marka: string;
            model: string;
            enginePower: number;
            engineCapacity: number;
            acceleration: number;
          }) => (
            <Car
              key={id}
              marka={marka}
              model={model}
              enginePower={enginePower}
              engineCapacity={engineCapacity}
              acceleration={acceleration}
              link={car.contatact.websiteHoppyGo}
              telephone={car.contatact.telephoneNumber}
            />
          )
        )}
      </div>
    </div>
  );
};
