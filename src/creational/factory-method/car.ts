import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private readonly name: string) {}

  start(): void {
    console.log(`O carro ${this.name} está ligando...`);
  }

  stop(): void {
    console.log('O carro está desligando...');
  }
}
