import { Vehicle } from './vehicle';

export class Motorcycle implements Vehicle {
  constructor(private readonly name: string) {}

  start(): void {
    console.log(`A motocicleta ${this.name} está ligando...`);
  }

  stop(): void {
    console.log('A motocicleta está desligando...');
  }
}
