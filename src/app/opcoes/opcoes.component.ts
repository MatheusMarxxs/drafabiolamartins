import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss']
})
export class OpcoesComponent {
  logoUrl: string = environment.paginas.logoUrl
  btns: any = environment.paginas.opcoes.btns

  constructor(private $gaService: GoogleAnalyticsService) {}

  
  abrirWhats(interesse: string) {
    let msg = environment.paginas.opcoes.messagePrefix

    if (interesse != 'outros') {
      msg += "Tenho interesse em saber mais sobre " + interesse + "."
    }

    this.$gaService.event('agendar_whats', 'Agendar via WhatsApp', interesse, 1)

    window.location.href = "https://api.whatsapp.com/send/?phone=" + environment.paginas.opcoes.whatsapp + "&text=" + msg + "&type=phone_number&app_absent=0"
  }
}
