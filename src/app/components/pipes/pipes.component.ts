import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  varteste : string = "O texto sofrerá alterações no angular através do pipe!";
  vartestecaixaalta: string = "ESSE TEXTO ESTÁ GRAVADO NA VARIÁVEL EM CAIXA ALTA!";
  vartitulo: string = "esse texto foi formatado em formato de título!";
  today = new Date();
}
