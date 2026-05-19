import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class SaladaVerde implements ItemDaRefeicao {
  nome = 'Salada verde';
  descricao = 'Mix de folhas, tomate-cereja e molho de limao.';

  getPreco(): number {
    return 8.0;
  }
}
