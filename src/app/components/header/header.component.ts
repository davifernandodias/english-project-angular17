import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PrimaryInputComponent } from "../primary-input/primary-input.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryInputComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Adiciona a classe 'loaded' ao elemento navbar após um breve atraso
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement.querySelector('.navbar'), 'loaded');
    }, 100); // 100ms de atraso para garantir que os elementos sejam ocultos inicialmente
  }
}
