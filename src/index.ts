import { CarFactory } from './creational/factory-method/carFactory';
import { MotorcycleFactory } from './creational/factory-method/motorcycleFactory';

const carFactory = new CarFactory();
const motorcycleFactory = new MotorcycleFactory();

const car = carFactory.deliverVehicle('Fiat');
car.stop();

const motorcycle = motorcycleFactory.deliverVehicle('Honda');
motorcycle.stop();
