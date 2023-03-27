import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  showMessage : boolean = true;
  
  
  Unshow(): void {
    /*if(this.showMessage == false){
      this.showMessage = true;
    }else{
      this.showMessage = false;
    }*/
    this.showMessage = !this.showMessage; // toggle
  }
  

}
