export default class Vehicle {

  constructor(
    private readonly color: string,
    private readonly seats: number,
    private readonly engine: string,
    private readonly wheels: number,
    private readonly doors: number,
    private readonly windows: number,
  ) {}

  /*
  * Movido para o arquivo Car.ts
  */
  car(): void {
    console.log(`Creating a car with ${this.color} color, ${this.seats} seats, ${this.engine} engine, ${this.wheels} wheels, ${this.doors} doors, ${this.windows} windows`);

    this.startVehicle();
  }

  /*
  * Movido para o arquivo Motorcycle.ts
  */
  motorcycle(): void {
    console.log(`Creating a motorcycle with ${this.color} color, ${this.seats} seats, ${this.engine} engine, ${this.wheels} wheels, ${this.doors} doors, ${this.windows} windows`);

    this.startVehicle();
  }

  startVehicle(): void {
    console.log('Starting vehicle...');
  }
}