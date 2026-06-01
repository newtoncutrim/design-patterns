import { Car } from './car';
import { Vehicle } from './vehicle';
import { VehicleFactory } from './vehicleFactory';

export class CarFactory extends VehicleFactory {
  protected createVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
