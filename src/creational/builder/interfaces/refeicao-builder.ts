import { Refeicao } from '../classes/refeicao';

export interface RefeicaoBuilder {
  reset(): this;
  prepararPratoPrincipal(): this;
  prepararAcompanhamento(): this;
  prepararBebida(): this;
  getRefeicao(): Refeicao;
}
