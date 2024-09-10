import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-students.component.html',
  styleUrls: ['./feedback-students.component.scss']
})
export class FeedbackStudentsComponent implements AfterViewInit {

  feedbacks = [
    { name: 'João Silva', img: 'https://randomuser.me/api/portraits/men/1.jpg', message: 'O curso foi muito bom, aprendi bastante!' },
    { name: 'Maria Oliveira', img: 'https://randomuser.me/api/portraits/women/2.jpg', message: 'As aulas são muito bem explicadas e flexíveis.' },
    { name: 'Carlos Pereira', img: 'https://randomuser.me/api/portraits/men/3.jpg', message: 'Recomendo a todos, excelente experiência.' },
    { name: 'Ana Souza', img: 'https://randomuser.me/api/portraits/women/4.jpg', message: 'Os professores são ótimos!' },
    { name: 'Roberto Lima', img: 'https://randomuser.me/api/portraits/men/5.jpg', message: 'A infraestrutura do curso é excelente.' },
    { name: 'Lima Oliveira', img: 'https://randomuser.me/api/portraits/men/6.jpg', message: 'A infraestrutura do curso é excelente de boa.' },
    { name: 'Lima Oliveira', img: 'https://randomuser.me/api/portraits/men/7.jpg', message: 'A infraestrutura do curso é excelente de boa.' },
    { name: 'Lima Oliveira', img: 'https://randomuser.me/api/portraits/men/8.jpg', message: 'A infraestrutura do curso é excelente de boa.' },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'fade-in');
          observer.unobserve(entry.target); // Para observar somente uma vez
        }
      });
    }, { threshold: 0.2 });

    const feedbackCards = this.el.nativeElement.querySelectorAll('.feedback-card');
    feedbackCards.forEach((card: HTMLElement) => {
      observer.observe(card);
    });
  }
}
