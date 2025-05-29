import IVechicleMotorcycle from "./IVechicleMotorcycle";

export default class Motorcycle implements IVechicleMotorcycle {
  constructor(
    color: string,
    seats: number,
    engine: string,
  ) {
    this.configure(color, seats, engine);
  }

  startVehicle(): void {
    console.log('Starting motorcycle...');
  }

  configure(
    color: string,
    seats: number,
    engine: string,
  ): void {
    console.log(`Creating a motorcycle with ${color} color, ${seats} seats, ${engine} engine`);
  }
}
