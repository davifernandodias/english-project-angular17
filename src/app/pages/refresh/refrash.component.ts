import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface RefrashhForm {
  email: FormControl,
  code: FormControl
}

@Component({
  selector: 'app-refrash',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './refrash.component.html',
  styleUrl: './refrash.component.scss'
})
export class RefrashComponent {
  refrashForm!: FormGroup<RefrashhForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.refrashForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      code: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.refrashForm.value.email, this.refrashForm.value.code).subscribe({
      next: () => this.toastService.success("password refresh with sucuss!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
