export interface Prototype<T> {
  clone(): T;
}

interface Address {
  city: string;
  country: string;
}

interface PersonProps {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
}

/**
 * Padrão Prototype
 *
 * O Prototype é um padrão criacional usado para criar novos objetos
 * copiando uma instância existente, em vez de recriar toda a
 * configuração do zero.
 *
 * Neste exemplo, a classe `Person` sabe como clonar a si mesma.
 * Repare que a clonagem copia também estruturas internas (`address`
 * e `hobbies`), evitando que o clone compartilhe referências mutáveis
 * com o objeto original.
 */
export class Person implements Prototype<Person> {
  constructor(
    public name: string,
    public age: number,
    public address: Address,
    public hobbies: string[],
  ) {}

  clone(): Person {
    return new Person(this.name, this.age, { ...this.address }, [
      ...this.hobbies,
    ]);
  }

  cloneWith(changes: Partial<PersonProps>): Person {
    const clone = this.clone();

    return new Person(
      changes.name ?? clone.name,
      changes.age ?? clone.age,
      changes.address ? { ...changes.address } : clone.address,
      changes.hobbies ? [...changes.hobbies] : clone.hobbies,
    );
  }
}

const person1 = new Person(
  'Alice',
  30,
  { city: 'Sao Paulo', country: 'Brasil' },
  ['Ler', 'Correr'],
);

const person2 = person1.clone();
const person3 = person1.cloneWith({
  name: 'Bob',
  address: { city: 'Rio de Janeiro', country: 'Brasil' },
});

person2.hobbies.push('Viajar');

console.log('Pessoa original:', person1);
console.log('Clone identico:', person2);
console.log('Clone personalizado:', person3);
console.log('As instancias sao diferentes?', person1 !== person2);
console.log(
  'Os hobbies foram copiados sem compartilhar referencia?',
  person1.hobbies !== person2.hobbies,
);
