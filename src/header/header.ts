import { colaboradorService } from './../services/colaborador.service';
import { Component, inject, computed } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly title: string = 'Cadastro de Colaboradores';

  private readonly colaboradorService = inject(colaboradorService);

  readonly totalColaboradores = computed(() => this.colaboradorService.colaboradores().length);
    
}
