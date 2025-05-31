import Db from "../model/DB";
import IDBProduct from "../model/IDBProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import { MySQLProduct } from "../model/MySQLProduct";

export default class DbProductFactory {
  private static type: Db = Db.MYSQL;
  
  public static create(): IDBProduct {
    if (DbProductFactory.type === Db.MYSQL) {
      return new MySQLProduct();
    } else if (DbProductFactory.type === Db.MONGODB) {
      return new MongoDBProduct();
    } else {
      throw new Error("Invalid database type");
    }
  }
}