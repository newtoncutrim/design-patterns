# Factory Method

O padrão **Factory Method** é um padrão criacional usado para delegar a criação de objetos para classes especializadas.

Em vez de o código cliente decidir diretamente qual implementação concreta deve ser instanciada, ele conversa com uma fábrica que conhece essa decisão.

## Como ele funciona

No Factory Method, existe um criador base que define o fluxo principal e deixa a etapa de criação do produto para subclasses concretas.

Neste exemplo:

- `Vehicle` representa o produto;
- `Car` e `Motorcycle` são produtos concretos;
- `VehicleFactory` define a operação de alto nível `deliverVehicle()` e o método de fábrica `createVehicle()`;
- `CarFactory` e `MotorcycleFactory` decidem qual veículo concreto deve ser criado.

Assim, o código cliente trabalha com a abstração da fábrica e do produto, sem depender diretamente da classe concreta criada em cada caso.

## Quando usar

Use Factory Method quando:

- a criacao do objeto varia conforme o contexto;
- você quer remover condicionais repetidas de instanciação;
- novas variações de produto podem surgir com o tempo;
- o código cliente deve conhecer o mínimo possível das classes concretas.

## Vantagens

- desacopla a criação do uso do objeto;
- facilita extensão com novos produtos;
- centraliza regras de criação;
- melhora a legibilidade do fluxo principal.

## Cuidados

Factory Method adiciona mais classes e níveis de abstração. Se a criação for simples e não variar, esse custo extra pode não compensar.

Também vale cuidar para que a fábrica não concentre responsabilidades demais além da criação.

## Exemplo deste projeto

Neste diretório, a fábrica abstrata `VehicleFactory` define o fluxo de entrega de um veículo:

- cria o veículo chamando `createVehicle()`;
- executa uma etapa comum com `deliverVehicle()`;
- devolve um produto que segue o contrato `Vehicle`.

Com isso, `CarFactory` e `MotorcycleFactory` podem mudar o tipo de veículo criado sem alterar o fluxo que usa a fábrica.
