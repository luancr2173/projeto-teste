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

  NovoColaborador: Colaborador = {
    nome: '',
    email: '',
    projeto: ' ',
    dataAdmissao: ' '
  };
  
  adicionarColaborador() {
    if( !this.NovoColaborador.nome || !this.NovoColaborador.email || !this.NovoColaborador.projeto || !this.NovoColaborador.dataAdmissao) {
      alert('Por favor, preencha todos os campos antes de adicionar um colaborador.');
      return;
    } else {
      console.log('Novo colaborador adicionado:', this.NovoColaborador);
    }

    this.ColaboradorService.adicionarColaborador(this.NovoColaborador);

    this.NovoColaborador = {
      nome: '',
      email: '',
      projeto: ' ',
      dataAdmissao: ' '
    };
  }

}
