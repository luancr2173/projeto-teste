import { colaboradorService } from './../services/colaborador.service';
import { Component, inject, output } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  private readonly ColaboradorService = inject(colaboradorService);

  tentativaDeEnvio = false;

  NovoColaborador: Colaborador = {
    id: 0,
    nome: '',
    email: '',
    projeto: '',
    dataAdmissao: ''
  };

  adicionarColaborador() {
    this.tentativaDeEnvio = true;

    if (!this.NovoColaborador.nome || !this.NovoColaborador.email || !this.NovoColaborador.projeto || !this.NovoColaborador.dataAdmissao) {
      return;
    }else {
      this.ColaboradorService.adicionarColaborador(this.NovoColaborador);
    }

    this.NovoColaborador = {
      id: 0,
      nome: '',
      email: '',
      projeto: '',
      dataAdmissao: ''
    };
    this.tentativaDeEnvio = false;
  }

}
