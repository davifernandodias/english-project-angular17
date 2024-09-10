import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { FormModalComponent } from "../form-modal/form-modal.component";

@Component({
  selector: 'app-profile-history',
  standalone: true,
  imports: [FormModalComponent],
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss']
})
export class ProfileHistoryComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'fade-in');
          observer.unobserve(entry.target);  // Desativa a observação após a animação
        }
      });
    }, { threshold: 0.1 });

    const profileContainer = this.el.nativeElement.querySelector('.profile-container');
    if (profileContainer) {
      observer.observe(profileContainer);
    }
  }
}
