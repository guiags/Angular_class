import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Jamalz";
  title = 'Ang_Project1';
  var_first = "Testando";
  userData =  {
    nome: "Guilherme",
    sobre: "Augusto",
    curso: "Eng. Computação"
  }
}
