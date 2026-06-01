import { Vehicle } from './vehicle';

export abstract class VehicleFactory {
  protected abstract createVehicle(vehicleName: string): Vehicle;

  deliverVehicle(vehicleName: string): Vehicle {
    const vehicle = this.createVehicle(vehicleName);
    console.log(`Preparando ${vehicleName} para uso.`);
    vehicle.start();
    return vehicle;
  }
}
