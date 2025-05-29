import NubankCard from "./NubankCard";

export default class DebitCard extends NubankCard {
  validate(): boolean {
    console.log("Verificando saldo do cartão de débito");
    return true;
  }
}