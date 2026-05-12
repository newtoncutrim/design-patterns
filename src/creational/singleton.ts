import { Users } from './interfaces/users';

/**
 * Padrão Singleton
 *
 * O Singleton é um padrão criacional que garante que uma classe tenha
 * apenas uma única instância durante toda a execução da aplicação.
 *
 * Neste exemplo, o construtor é privado para impedir que outras partes
 * do código criem novos objetos usando `new Singleton()`.
 *
 * A única forma de acessar a instância é através do método estático
 * `getInstance()`. Esse método verifica se a instância já existe:
 *
 * - se não existir, cria uma nova instância;
 * - se já existir, retorna a mesma instância criada anteriormente.
 *
 * Dessa forma, todos os lugares da aplicação que chamarem
 * `Singleton.getInstance()` estarão usando o mesmo objeto e,
 * consequentemente, compartilhando a mesma lista de usuários.
 *
 * Resumo:
 * - `private constructor()` bloqueia criação direta com `new`;
 * - `private static instance` guarda a única instância da classe;
 * - `static getInstance()` controla a criação e o acesso ao objeto;
 * - métodos como `addUser`, `getUsers` e `removeUser` trabalham
 *   sobre o mesmo estado compartilhado.
 */
export class Singleton {
  public users: Users[] = [];
  private static instance: Singleton;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      return (Singleton.instance = new Singleton());
    }

    return Singleton.instance;
  }

  addUser(user: Users): void {
    this.users.push(user);
  }

  getUsers(): Users[] {
    return console.log(this.users), this.users;
  }

  removeUser(name: string): void {
    this.users = this.users.filter((user) => user.name !== name);
  }
}

const singleton1 = Singleton.getInstance();
singleton1.addUser({ name: 'Alice', age: 30 });
singleton1.getUsers();
