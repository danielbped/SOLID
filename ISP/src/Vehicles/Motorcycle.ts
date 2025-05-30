import IVehicleMotorcycle from "./IVechicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {

  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }

  startEngine(): void {
    console.log('Motorcycle engine started');
  }

  configureMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Motorcycle configured with color ${color}, year ${year}, engine ${engine}`);

    this.startEngine();
  }
}