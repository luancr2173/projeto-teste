import { Injectable, signal } from "@angular/core";
import { Colaborador } from "../models/colaborador.model";

@Injectable({
    providedIn: 'root'
})
export class colaboradorService {
    readonly colaboradores = signal<Colaborador[]>([]);

    private proximoId = 1;

    adicionarColaborador(colaborador: Colaborador) {
        const novoColaborador: Colaborador = {
            ...colaborador,
            id: this.proximoId++
        };

        this.colaboradores.update((listaAtual) => [...listaAtual, novoColaborador]);
    }

    removerColaborador(id: number) {
        this.colaboradores.update((listaAtual) => listaAtual.filter((colaborador) => colaborador.id !== id));
    }
}