import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss'] // Corrigido aqui
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secundaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  submit() {
    this.onSubmit.emit();
  }

}
