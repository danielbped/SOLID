import NubankCard from "./NubankCard";

export default class CreditCard extends NubankCard {
  validate(): boolean {
    console.log("Validando cartão de crédito");
    return true;
  }
}