import { Cozinha } from './creational/builder/cozinha';
import { Refeicao } from './creational/builder/classes/refeicao';
import { RefeicaoTradicionalBuilder } from './creational/builder/refeicao-tradicional-builder';
import { RefeicaoVeganaBuilder } from './creational/builder/refeicao-vegana-builder';

function exibirRefeicao(titulo: string, refeicao: Refeicao): void {
  console.log(`\n${titulo}`);
  console.log(refeicao.getResumo().join('\n'));
  console.log(
    `Total: R$ ${refeicao.getPrecoTotal().toFixed(2).replace('.', ',')}`,
  );
}

const cozinha = new Cozinha();

const refeicaoVegana = cozinha.montarRefeicaoCompleta(
  new RefeicaoVeganaBuilder(),
);

const refeicaoTradicional = cozinha.montarRefeicaoCompleta(
  new RefeicaoTradicionalBuilder(),
);

const refeicaoPersonalizada = new RefeicaoVeganaBuilder()
  .reset()
  .prepararPratoPrincipal()
  .prepararBebida()
  .getRefeicao();

exibirRefeicao('Refeicao vegana completa', refeicaoVegana);
exibirRefeicao('Refeicao tradicional completa', refeicaoTradicional);
exibirRefeicao('Refeicao vegana personalizada', refeicaoPersonalizada);
