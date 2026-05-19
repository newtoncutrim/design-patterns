import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class FileDeFrangoGrelhado implements ItemDaRefeicao {
  nome = 'File de frango grelhado';
  descricao = 'Proteina temperada com ervas e preparada na chapa.';

  getPreco(): number {
    return 18.0;
  }
}
