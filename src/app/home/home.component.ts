import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {
    setTimeout(() => {
      window.location.href = 'https://api.whatsapp.com/send/?phone=5513974109547&text=Ol%C3%A1%20Dra.%20Fab%C3%ADola!%20Eu%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.&type=phone_number&app_absent=0';
    }, 3000);
  }
}
