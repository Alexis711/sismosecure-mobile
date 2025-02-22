import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  isLoadingSalones: boolean = false;
  
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  onCollapseOpciones(SalonID: string){
    const desplegable = this.element.nativeElement.querySelector('#desplegarOpciones' + SalonID);
    if (desplegable) {
      if (desplegable.style.display === 'none' || !desplegable.style.display) {
        this.renderer.setStyle(desplegable, 'display', 'block');
      } else {
        this.renderer.setStyle(desplegable, 'display', 'none');
      }
    }
  }

}
