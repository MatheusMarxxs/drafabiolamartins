import { Component } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent {
  
  abrirWhats(interesse: string) {
    let msg = "Olá Dra. Fabíola! Eu gostaria de agendar uma avaliação. "

    if (interesse != 'outros') {
      msg += "Tenho interesse em saber mais sobre " + interesse + "."
    }

    window.location.href = "https://api.whatsapp.com/send/?phone=5513974109547&text=" + msg + "&type=phone_number&app_absent=0"
  }
}
