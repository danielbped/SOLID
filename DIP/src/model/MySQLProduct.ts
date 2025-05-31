import IDBProduct from "./IDBProduct";

export class MySQLProduct implements IDBProduct {
  getProductById(productId: number): string {
    return `MySQL: Product ${productId}`;
  }
}
