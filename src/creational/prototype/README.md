# Prototype

O padrão **Prototype** é um padrão criacional que permite criar novos objetos a partir da cópia de um objeto já existente.

Em vez de recriar e configurar tudo novamente, usamos um objeto base como modelo e geramos cópias dele. Isso é útil quando a criação do objeto é repetitiva, custosa ou quando queremos reaproveitar uma configuração inicial.

## Como ele funciona

A ideia central é que o próprio objeto saiba como se copiar por meio de uma operação de clonagem, geralmente chamada `clone`.

No exemplo deste diretório:

- o contrato `Prototype<T>` define a operação de clonagem;
- a classe `Person` implementa `clone()` para criar uma nova instância;
- a clonagem também copia estruturas internas, como `address` e `hobbies`;
- o método `cloneWith()` mostra um uso comum do padrão: clonar e alterar apenas alguns dados.

## Quando usar

Use Prototype quando:

- vários objetos começam com a mesma base;
- a criação manual do objeto deixa o código repetitivo;
- existe risco de duplicar regras de inicialização em muitos lugares;
- você quer gerar variações de um objeto já configurado.

## Vantagens

- reduz duplicação de código na criação de objetos;
- facilita criar variações a partir de um modelo;
- centraliza a lógica de cópia dentro da própria classe;
- deixa a intenção do código mais clara.

## Cuidados

Se o objeto tiver propriedades aninhadas, é importante decidir entre cópia rasa e cópia profunda.

Neste exemplo, `address` e `hobbies` são copiados para evitar que alterações no clone afetem o objeto original.
