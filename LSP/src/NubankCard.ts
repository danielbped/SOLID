import IPaymentInstrument from "./Interfaces/IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): boolean {
    return true;
  }

  collectPayment(): void {
    console.log("Pagamento realizado com sucesso");
  }
}