import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-content-questions',
  standalone: true,
  imports: [NgIf,NgClass,NgFor],
  templateUrl: './content-questions.component.html',
  styleUrl: './content-questions.component.scss'
})
export class ContentQuestionsComponent {
  questions = [
    { text: 'Qual método que a Company English usa durante as aulas ao vivo?', answer: 'Usamos métodos modernos e interativos para otimizar o aprendizado.', showAnswer: false },
    { text: 'Como são estruturadas as aulas?', answer: 'As aulas são divididas em segmentos interativos e práticas.', showAnswer: false },
    { text: 'Quais são os horários das aulas?', answer: 'Os horários são flexíveis e adaptáveis ao seu ritmo.', showAnswer: false },
    { text: 'Qual a duração das aulas?', answer: 'Cada aula tem duração de 1 hora, com a possibilidade de extensões.', showAnswer: false }
  ];

  toggleAnswer(question: any) {
    question.showAnswer = !question.showAnswer;
  }
}
