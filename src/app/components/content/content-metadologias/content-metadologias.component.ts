import { Component, ElementRef, OnInit } from '@angular/core';
import { FormModalComponent } from "../form-modal/form-modal.component";
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-content-metadologias',
  standalone: true,
  imports: [FormModalComponent, NgIf],
  templateUrl: './content-metadologias.component.html',
  styleUrls: ['./content-metadologias.component.scss']
})
export class ContentMetadologiasComponent implements OnInit {


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

    const textSection = this.elementRef.nativeElement.querySelector('.text-section');
    if (textSection) observer.observe(textSection);

    const featuresSection = this.elementRef.nativeElement.querySelector('.features');
    if (featuresSection) observer.observe(featuresSection);


  }
}
