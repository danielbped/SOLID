import IPaymentInstrument from "./Interfaces/IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  validate(): boolean {
    console.log("Validando pontos do Nubank Rewards");
    return true;
  }

  collectPayment(): void {
    console.log("Pagamento realizado com sucesso usando pontos");
  }
}