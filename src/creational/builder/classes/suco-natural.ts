import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class SucoNatural implements ItemDaRefeicao {
  nome = 'Suco natural';
  descricao = 'Bebida refrescante preparada com frutas da estacao.';

  getPreco(): number {
    return 7.5;
  }
}
