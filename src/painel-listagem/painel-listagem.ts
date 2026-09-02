import { Component, inject } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { colaboradorService } from '../services/colaborador.service';

@Component({
  selector: 'app-painel-listagem',
  imports: [],
  templateUrl: './painel-listagem.html',
  styleUrl: './painel-listagem.css',
})

export class PainelListagem {
  private readonly colaboradorService = inject(colaboradorService);

  readonly colaboradores = this.colaboradorService.colaboradores;

  excluirColaborador(id: number) {
    this.colaboradorService.removerColaborador(id);
  }

  formatarData(data: string): string {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

}
