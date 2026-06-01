import { Users } from './interfaces/users-singleton';

/**
 * Padrão Singleton
 *
 * O Singleton é um padrão criacional que garante que uma classe tenha
 * apenas uma única instância durante toda a execução da aplicação.
 *
 * Neste exemplo, a criacao direta da classe fica bloqueada e o acesso
 * passa por um unico ponto central: `getInstance()`.
 *
 * Se a instancia ainda nao existir, ela e criada. Caso contrario,
 * o mesmo objeto compartilhado e reutilizado.
 *
 * Dessa forma, todos os lugares da aplicacao que chamarem
 * `Singleton.getInstance()` trabalham sobre a mesma lista de usuarios.
 */
export class Singleton {
  private users: Users[] = [];
  private static instance: Singleton;

  private constructor() {}

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
    const users = [...this.users];
    console.log(users);
    return users;
  }

  removeUser(name: string): void {
    this.users = this.users.filter((user) => user.name !== name);
  }
}

const singleton1 = Singleton.getInstance();
singleton1.addUser({ name: 'Alice', age: 30 });
singleton1.getUsers();
