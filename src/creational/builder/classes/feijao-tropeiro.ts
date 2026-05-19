import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class FeijaoTropeiro implements ItemDaRefeicao {
  nome = 'Feijao tropeiro';
  descricao = 'Acompanhamento bem servido, cheio de sabor e textura.';

  getPreco(): number {
    return 9.0;
  }
}
