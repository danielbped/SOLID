import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number
  ) {
    this.configureCar(color, year, engine, seats);
  }
  configureCar(color: string, year: number, engine: number, seats: number): void {
    console.log(`Car configured with color ${color}, year ${year}, engine ${engine}, seats ${seats}`);

    this.startEngine();
  }

  startEngine(): void {
    console.log('Car engine started');
  }
  
}
