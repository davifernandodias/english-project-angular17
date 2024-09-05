import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-content-metadologias',
  standalone: true,
  imports: [],
  templateUrl: './content-metadologias.component.html',
  styleUrl: './content-metadologias.component.scss'
})
export class ContentMetadologiasComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('show');
      }, index * 500); // Delay for each section
    });
  }

}
