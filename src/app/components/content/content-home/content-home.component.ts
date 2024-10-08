import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { FormModalComponent } from "../form-modal/form-modal.component";

@Component({
  selector: 'app-content-home',
  standalone: true,
  imports: [HomeFooterComponent, FormModalComponent],
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss']
})
export class ContentHomeComponent implements AfterViewInit {
  @ViewChild('typedOutput') typedOutput!: ElementRef;

  ngAfterViewInit(): void {
    const options = {
      strings: ['Aprenda de forma divertida.', 'Transformando sua rotina em aprendizagem.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
      onStringTyped: () => {
        this.adjustHeight();
      }
    };

    const typed = new Typed(this.typedOutput.nativeElement, options);

    this.adjustHeight();
  }

  private adjustHeight() {
    const element = this.typedOutput.nativeElement;
    element.style.height = `${element.scrollHeight}px`;
  }
}
