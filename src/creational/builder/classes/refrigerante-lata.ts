import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class RefrigeranteLata implements ItemDaRefeicao {
  nome = 'Refrigerante em lata';
  descricao = 'Bebida gelada para acompanhar a refeicao completa.';

  getPreco(): number {
    return 6.0;
  }
}
