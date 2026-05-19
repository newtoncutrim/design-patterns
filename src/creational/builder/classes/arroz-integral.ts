import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class ArrozIntegral implements ItemDaRefeicao {
  nome = 'Arroz integral';
  descricao = 'Porcao leve e nutritiva para acompanhar a refeicao.';

  getPreco(): number {
    return 6.5;
  }
}
