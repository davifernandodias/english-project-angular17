import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent {
  @Input() buttonText: string = 'Agendar aula';

  redirectWsap(){
    window.location.href = "https://wa.me/5516988453494?text=";
  }

  formData = {
    name: '',
    email: '',
    phone: ''
  };

  openModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    this.closeModal(); // Fechar o modal após o envio
  }
}
