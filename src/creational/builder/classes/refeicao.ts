import { ItemDaRefeicao } from '../interfaces/item-da-refeicao';

export class Refeicao {
  private readonly itens: ItemDaRefeicao[] = [];

  adicionarItem(item: ItemDaRefeicao): void {
    this.itens.push(item);
  }

  getItens(): ItemDaRefeicao[] {
    return [...this.itens];
  }

  getPrecoTotal(): number {
    return this.itens.reduce((total, item) => total + item.getPreco(), 0);
  }

  getResumo(): string[] {
    return this.itens.map(
      (item) =>
        `${item.nome}: ${item.descricao} - R$ ${item
          .getPreco()
          .toFixed(2)
          .replace('.', ',')}`,
    );
  }
}
