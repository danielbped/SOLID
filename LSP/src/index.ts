import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

const creditCard = new CreditCard();
const debitCard = new DebitCard();
const nubankRewards = new NubankRewards();

debitCard.validate();
creditCard.validate();
nubankRewards.validate();

debitCard.collectPayment();
creditCard.collectPayment();
nubankRewards.collectPayment();
