import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class LegumesAssados implements ItemDaRefeicao {
  nome = 'Legumes assados';
  descricao = 'Abobrinha, cenoura e batata-doce assadas com ervas.';

  getPreco(): number {
    return 14.0;
  }
}
