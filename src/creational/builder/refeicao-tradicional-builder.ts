import { FeijaoTropeiro } from './classes/feijao-tropeiro';
import { FileDeFrangoGrelhado } from './classes/file-de-frango-grelhado';
import { Refeicao } from './classes/refeicao';
import { RefrigeranteLata } from './classes/refrigerante-lata';
import { RefeicaoBuilder } from './interfaces/refeicao-builder';

export class RefeicaoTradicionalBuilder implements RefeicaoBuilder {
  private refeicaoAtual: Refeicao = new Refeicao();

  reset(): this {
    this.refeicaoAtual = new Refeicao();
    return this;
  }

  prepararPratoPrincipal(): this {
    this.refeicaoAtual.adicionarItem(new FileDeFrangoGrelhado());
    return this;
  }

  prepararAcompanhamento(): this {
    this.refeicaoAtual.adicionarItem(new FeijaoTropeiro());
    return this;
  }

  prepararBebida(): this {
    this.refeicaoAtual.adicionarItem(new RefrigeranteLata());
    return this;
  }

  getRefeicao(): Refeicao {
    const refeicaoFinalizada = this.refeicaoAtual;
    this.reset();
    return refeicaoFinalizada;
  }
}
