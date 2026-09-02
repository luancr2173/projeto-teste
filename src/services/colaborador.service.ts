import { Injectable, signal } from "@angular/core";
import { Colaborador } from "../models/colaborador.model";

@Injectable({
    providedIn: 'root'
})
export class colaboradorService {
    readonly colaboradores = signal<Colaborador[]>([]);

    adicionarColaborador(colaborador: Colaborador) {
        this.colaboradores.update((listaAtual) => [...listaAtual, colaborador]);
    }
}