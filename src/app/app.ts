import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { Formulario } from "../formulario/formulario";
import { PainelListagem } from "../painel-listagem/painel-listagem";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Formulario, PainelListagem, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-teste');
}
