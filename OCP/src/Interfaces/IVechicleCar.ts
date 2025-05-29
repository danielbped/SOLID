export default interface IVechicleCar {
  startVehicle(): void;

  configure(
      color: string,
      seats: number,
      engine: string,
      wheels: number,
      doors: number,
      windows: number
    ): void;
}

