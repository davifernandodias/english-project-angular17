import { Component, ElementRef, OnInit } from '@angular/core';
import { FormModalComponent } from "../form-modal/form-modal.component";

@Component({
  selector: 'app-us',
  standalone: true,
  imports: [FormModalComponent],
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, options);

    const usContainer = this.elementRef.nativeElement.querySelector('.us-container');
    if (usContainer) observer.observe(usContainer);
  }
}
