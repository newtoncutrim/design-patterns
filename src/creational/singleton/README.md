# Singleton

O padrão **Singleton** é um padrão criacional que garante que uma classe tenha apenas uma única instância durante toda a execução da aplicação.

Além disso, ele fornece um ponto global de acesso para essa instância.

## Como ele funciona

No Singleton, o próprio componente controla sua criação:

- a criação direta fica restrita;
- uma referência central guarda a única instância;
- uma operação de acesso, como `getInstance()`, cria a instância na primeira chamada e reutiliza a mesma nas próximas.

Neste projeto, a classe `Singleton` centraliza uma lista de usuários compartilhada por toda a aplicação.

## Quando usar

Use Singleton quando:

- só pode existir uma instância da classe;
- vários pontos do sistema precisam acessar o mesmo estado;
- você quer centralizar controle de dados ou configuração.

## Vantagens

- evita múltiplas instâncias inconsistentes;
- centraliza o acesso a um recurso compartilhado;
- reduz duplicação de estado dentro da aplicação.

## Cuidados

Apesar de ser útil, Singleton deve ser usado com cuidado.

Como ele compartilha estado global, pode:

- aumentar o acoplamento entre partes do sistema;
- dificultar testes;
- esconder dependências importantes.

Por isso, vale usar esse padrão apenas quando realmente fizer sentido existir uma única instância.
