export default interface IPaymentInstrument {
  validate(): boolean;
  collectPayment(): void;
}