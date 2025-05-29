import { TypeVehicle } from "./Types/TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";
// import Vehicle from "./vehicles/Vehicle";

const type: TypeVehicle = TypeVehicle.CAR;
let vehicle;

/* 
* Antes de refatorar
*/
// if (type === TypeVehicle.CAR) {
//   vehicle = new Vehicle('red', 4, '1.0', 4, 2, 4);
//   vehicle.car();
// } else if (type === TypeVehicle.MOTORCYCLE) {
//   vehicle = new Vehicle('blue', 2, '1.0', 2, 0, 0);
//   vehicle.motorcycle();
// }

if (type === TypeVehicle.CAR) {
  vehicle = new Car('red', 4, '1.0', 4, 2, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle('blue', 2, '1.0');
}

vehicle.startVehicle();
