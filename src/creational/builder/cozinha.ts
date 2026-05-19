import { Refeicao } from './classes/refeicao';
import { RefeicaoBuilder } from './interfaces/refeicao-builder';

export class Cozinha {
  montarRefeicaoCompleta(builder: RefeicaoBuilder): Refeicao {
    return builder
      .reset()
      .prepararPratoPrincipal()
      .prepararAcompanhamento()
      .prepararBebida()
      .getRefeicao();
  }

  montarRefeicaoRapida(builder: RefeicaoBuilder): Refeicao {
    return builder.reset().prepararPratoPrincipal().getRefeicao();
  }
}
