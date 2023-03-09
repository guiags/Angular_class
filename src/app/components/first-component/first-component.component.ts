import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  nome : string = "Jamal";
  curso : string = "Eng. Computação";
  carro = {
    modelo : "Fiesta",
    cor : "vermelho",
  }
  @Input() var1 : string = '';
}
