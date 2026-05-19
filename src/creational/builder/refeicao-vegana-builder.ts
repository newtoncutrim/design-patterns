import { ArrozIntegral } from './classes/arroz-integral';
import { LegumesAssados } from './classes/legumes-assados';
import { Refeicao } from './classes/refeicao';
import { SaladaVerde } from './classes/salada-verde';
import { SucoNatural } from './classes/suco-natural';
import { RefeicaoBuilder } from './interfaces/refeicao-builder';

/**
 * Padrão Builder
 *
 * O Builder e um padrão criacional usado quando queremos montar um
 * objeto passo a passo, sem misturar a logica de construcao com o
 * codigo que vai usar o resultado final.
 *
 * Neste exemplo, cada metodo adiciona uma parte da refeicao vegana.
 * Assim, podemos reaproveitar o mesmo processo de montagem para criar
 * variacoes diferentes de refeicoes, trocando apenas o Builder.
 *
 * Beneficios praticos:
 * - separa a montagem do objeto da representacao final;
 * - permite criar objetos complexos em etapas bem definidas;
 * - facilita ter builders diferentes para resultados diferentes.
 */
export class RefeicaoVeganaBuilder implements RefeicaoBuilder {
  private refeicaoAtual: Refeicao = new Refeicao();

  reset(): this {
    this.refeicaoAtual = new Refeicao();
    return this;
  }

  prepararPratoPrincipal(): this {
    this.refeicaoAtual.adicionarItem(new LegumesAssados());
    return this;
  }

  prepararAcompanhamento(): this {
    this.refeicaoAtual.adicionarItem(new ArrozIntegral());
    this.refeicaoAtual.adicionarItem(new SaladaVerde());
    return this;
  }

  prepararBebida(): this {
    this.refeicaoAtual.adicionarItem(new SucoNatural());
    return this;
  }

  getRefeicao(): Refeicao {
    const refeicaoFinalizada = this.refeicaoAtual;
    this.reset();
    return refeicaoFinalizada;
  }
}
