# Builder

O padrão **Builder** é um padrão criacional usado para construir objetos passo a passo.

Ele é útil quando o objeto final possui várias partes, combinações possíveis ou quando queremos separar a lógica de montagem da lógica de uso do objeto.

## Como ele funciona

No Builder, a construção acontece em etapas bem definidas. Em vez de montar tudo em uma única operação, cada etapa adiciona uma parte do resultado final.

Neste exemplo:

- `Refeicao` é o produto final;
- `RefeicaoBuilder` define o contrato de construção;
- `RefeicaoVeganaBuilder` e `RefeicaoTradicionalBuilder` implementam formas diferentes de montar a refeição;
- `Cozinha` atua como diretora, organizando a sequência de montagem.

Assim, o mesmo processo pode gerar resultados diferentes dependendo do builder usado.

## Quando usar

Use Builder quando:

- o objeto precisa ser montado em várias etapas;
- existem diferentes variações do mesmo produto;
- a rotina de criação ficaria grande ou confusa;
- você quer deixar o processo de criação mais legível.

## Vantagens

- separa a construção do objeto da sua representação final;
- melhora a legibilidade da criação de objetos complexos;
- facilita reaproveitar o mesmo fluxo de montagem;
- permite trocar a implementação sem mudar quem usa o objeto.

## Cuidados

Builder adiciona mais passos e estruturas auxiliares. Se o objeto for simples ou tiver poucas variações, uma criação direta pode ser mais clara.

## Exemplo deste projeto

Neste diretório, uma refeição é montada em etapas como:

- `prepararPratoPrincipal()`;
- `prepararAcompanhamento()`;
- `prepararBebida()`.

Com isso, a `Cozinha` consegue montar tanto uma refeição vegana quanto uma tradicional usando a mesma sequência, mudando apenas o builder.
