import IVechicleCar from "../Interfaces/IVechicleCar";

export default class Car implements IVechicleCar {
  constructor(
    color: string,
    seats: number,
    engine: string,
    wheels: number,
    doors: number,
    windows: number
  ) {
    this.configure(color, seats, engine, wheels, doors, windows);
  }
  
  startVehicle(): void {
    console.log('Starting car...');
  }

  configure(
    color: string,
    seats: number,
    engine: string,
    wheels: number,
    doors: number,
    windows: number
  ): void {
    console.log(`Creating a car with ${color} color, ${seats} seats, ${engine} engine, ${wheels} wheels, ${doors} doors, ${windows} windows`);
  }
}