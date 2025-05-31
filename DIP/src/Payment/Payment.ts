import DbProductFactory from "../factory/DbProductFactory";

export class Payment {
  processPayment(productId: number): void {
    const dbProduct = DbProductFactory.create();
    const product = dbProduct.getProductById(productId);
    console.log(`Processing payment for ${product}...`);
  }
}
