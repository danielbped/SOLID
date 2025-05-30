import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle {
  startEngine(): void;
  configureMotorcycle(color: string, year: number, engine: number): void;
}