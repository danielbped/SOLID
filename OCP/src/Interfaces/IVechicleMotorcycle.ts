export default interface IVechicleMotorcycle {
  startVehicle(): void;

  configure(
    color: string,
    seats: number,
    engine: string,

  ): void;
}
