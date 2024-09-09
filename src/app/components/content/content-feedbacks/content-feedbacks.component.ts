import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormModalComponent } from "../form-modal/form-modal.component";

@Component({
  selector: 'app-content-feedbacks',
  standalone: true,
  imports: [CommonModule, FormModalComponent],
  templateUrl: './content-feedbacks.component.html',
  styleUrls: ['./content-feedbacks.component.scss']
})
export class ContentFeedbacksComponent implements OnInit {
  teachers = [
    {
      name: 'Professor A',
      image: 'https://via.placeholder.com/244x476',
      instagram: 'https://instagram.com/professorA',
      description: 'Descrição do Professor A'
    },
    {
      name: 'Professor B',
      image: 'https://via.placeholder.com/244x476',
      instagram: 'https://instagram.com/professorB',
      description: 'Descrição do Professor B'
    },
    {
      name: 'Professor C',
      image: 'https://via.placeholder.com/244x476',
      instagram: 'https://instagram.com/professorC',
      description: 'Descrição do Professor C'
    }
    // Adicione mais professores conforme necessário
  ];

  selectedTeacher: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    AOS.init();

    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.teacher-card') as NodeListOf<HTMLElement>;
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('in-view');
            }, index * 250); // Delay para o efeito de deslizamento dos cards
          });
        } else {
          const cards = entry.target.querySelectorAll('.teacher-card') as NodeListOf<HTMLElement>;
          cards.forEach((card) => {
            card.classList.remove('in-view');
          });
        }
      });
    }, options);

    const teachersSection = this.elementRef.nativeElement.querySelector('.teachers-section');
    if (teachersSection) observer.observe(teachersSection);
  }

  onMouseEnter(teacher: any) {
    this.selectedTeacher = teacher;
  }

  onMouseLeave() {
    this.selectedTeacher = null;
  }
}
