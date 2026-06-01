import { Motorcycle } from './motorcycle';
import { Vehicle } from './vehicle';
import { VehicleFactory } from './vehicleFactory';

export class MotorcycleFactory extends VehicleFactory {
  protected createVehicle(vehicleName: string): Vehicle {
    return new Motorcycle(vehicleName);
  }
}
