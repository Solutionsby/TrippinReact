import { CustomButton } from "../../button/CustomButton";
import { Slider } from "../../slider/Slider";
import { useState } from "react";
import "./car.scss";

export const Car = ({
  id,
  marka,
  model,
  enginePower,
  engineCapacity,
  acceleration,
  telephone,
  photo,
}: {
  id: number;
  marka: string;
  model: string;
  link: string;
  photo: Array<object>;
  telephone: string;
  enginePower: number;
  engineCapacity: number;
  acceleration: number;
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
  return (
    <div className="car-wrapper">
      <div className="car-image">
        <Slider slides={photo} />
      </div>
      <div className="car-specification-wrapper">
        <h2>{carModel}</h2>
        <div className="car-capacity info">
          <p>Pojemność Silnika:</p>
          <p>{engineCapacity}cm</p>
        </div>
        <div className="horse-power info">
          <p>Moc Silnika</p>
          <p>{enginePower}kM</p>
        </div>
        <div className="acceleration info">
          <p>Przyśpieszenie 0-100 km/h</p>
          <p>{acceleration} s</p>
        </div>
        <div className="seats info">
          <p>Liczba miejsc:</p>
          <p>{carSeats}</p>
        </div>
      </div>
      <div className="car-contact info">
        <CustomButton href={`tel:+48${telephone}`} className="cars-button">
          Zarezerwuj
        </CustomButton>
      </div>
    </div>
  );
};
