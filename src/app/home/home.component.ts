import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  btnTexto: string = environment.paginas.home.btnText
  btnColor: string = environment.paginas.home.btnColor
  logoUrl: string = environment.paginas.logoUrl
  imageUrl: string = environment.paginas.home.imageUrl
}
